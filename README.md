# youngbinapp

## native module 만들기

  1. 네이티브 모듈을 만들기 위해서는 리액트 네이티브의 세 가지 클래스를 불러와야한다.
    - import com.facebook.react.bridge.ReactApplicationContext;
    - import com.facebook.react.bridge.ReactContextBaseJavaModule;
    - import com.facebook.react.bridge.ReactMethod;

  2. 생성할 Native Module에서는 ReactContextBaseJavaModule을 상속하고, getName 메서드를 오버라이딩해야 한다.

  3. getName 메서드에서는 만들 네이티브 모듈의 이름을 정한다. 여기서 정한 이름은 나중에 자바스크립트 코드에서 네이티브 모듈을 불러오는 과정에서 사용된다.

  4. 메서드 만들기. 메서드 위에 @ReactMethod를 붙여주면 추후 자바스크립트에서 호출할 수 있다.
     이렇게 @를 메서드 위에 붙여주는 문법을 Decorator 문법이라고 한다.
     [안드로이드 토스트 사용방법 링크](https://developer.android.com/guide/topics/ui/notifiers/toasts?hl=ko)

  5. duratin에는 0, 1을 설정할 수 있다. 0은 메시지를 짧은 시간 동안 보여주고, 1은 좀 더 긴 시간 동안 보여준다.

  6. 자바에서 특정 상수를 선언한 뒤 이를 자바스크립트에서 접근할 수 있게 하려면 getConstants 메서드를 만들어서 상수들을 지닌 Map을 생성해야 한다.

  ```java

  package com.youngbinapp;

  import com.facebook.react.bridge.ReactApplicationContext;
  import com.facebook.react.bridge.ReactContextBaseJavaModule;
  import com.facebook.react.bridge.ReactMethod;
  import android.widget.Toast;

  import java.util.HashMap;
  import java.util.Map;

  public class ToastModule extends ReactContextBaseJavaModule {
    ToastModule(ReactApplicationContext context) {
      super(context);
    }

    @Override
    public String getName() {
      return "ToastModule";
    }

    @ReactMethod
    public void show(String message, int duration) {
      ReactApplicationContext context = getReactApplicationContext();
      Toast toast = Toast.makeText(context, message, duration);
      toast.show();
    }

    @Override
    public Map<String, Object> getConstants() {
      final Map<String, Object> constants = new HashMap<>();
      constants.put("SHORT", Toast.LENGTH_SHORT);
      constants.put("LONG", Toast.LENGTH_LONG);
      return constants;
    }
  }

  ```

  ```js

  // JS에서의 호출

  import { NativeModules } from 'react-native';

  const { ToastModule } = NativeModules;
  ToastModule.show('Hello World', 1);


  // getConstants를 설정해주면 다음과 같이 값을 조회할 수 있다.
  ToastModule.show('Hello World', ToastModule.LONG);

  ```

  7. 패키지 작성하기. 모듈을 작성하고 이를 리액트 네이티브 프로젝트에서 사용하려면 패키지를 만들어서 등록해야 한다.
     ToastModule 클래스가 위치한 곳에 ToastPackage 클래스를 생성하자.

  ```java

  package com.youngbinapp;

  import com.facebook.react.ReactPackage;
  import com.facebook.react.bridge.NativeModule;
  import com.facebook.react.bridge.ReactApplicationContext;
  import com.facebook.react.uimanager.ViewManager;

  import java.util.ArrayList;
  import java.util.Collections;
  import java.util.List;

  public class ToastPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules (ReactApplicationContext reactContext) {
      List<NativeModule> modules = new ArrayList<>();
      modules.add(new ToastModule(reactContext));
      return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
      return Collections.emptyList();
    }
  }

  ```

  8. 패키지를 만들 때는 위와 같이 createNativeModules와 createViewManagers 메서드를 구현해야 한다.
     createViewManager는 네이티브 UI컴포넌트를 만들어서 등록할 때 사용하는 메서드로,
     지금은 네이티브 UI컴포넌트를 사용하지 않으니 빈 리스트를 반환했다.
     createNativeModules는 ArrayList를 만들고 그 안에 앞서 만든 ToastModule을 등록하고 그리스트를 반환했다.

  9. 패키지 등록하기
     패키지를 등록할 때는 MainApplication 클래스를 수정해야 한다.
     이 클래스에 선언된 mReactNativeHost를 보면 getPackages라는 메서드가 있다.

  ```java

  // MainApplication.java
  @Override
  protected List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    packages.add(new ToastPackage());
    // Packages that cannot be autolinked yet can be added manually here, for example:
    // packages.add(new MyReactNativePackage());
    return packages;
  }

  ```