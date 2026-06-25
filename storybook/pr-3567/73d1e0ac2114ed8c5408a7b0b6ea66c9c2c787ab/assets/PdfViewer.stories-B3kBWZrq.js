import{R as i,O as M,j as y,M as v}from"./iframe-Ci9OEgk1.js";import{P as D}from"./pdf-viewer-BRhEBXcU.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BPvpIWV1.js";import"./preload-helper-8sCrdDbL.js";import"./PdfRenderer-CTibX0cM.js";import"./index-DkMA7RU6.js";import"./PdfViewer-CvrO41ot.js";import"./PdfViewer.module.css-DZ61ko8I.js";import"./PdfViewerAnnotationLayer-DMjv7vyo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DIz-adxu.js";import"./PdfViewerOutlineSidebar-CUKm2Pit.js";import"./PdfViewerSidebarHeader-RqhZm9DB.js";import"./useBaseUiId-D6vQddwn.js";import"./useControlled-BIoQnqvN.js";import"./CompositeRoot-oFzbJwk3.js";import"./CompositeItem-CXrizCRc.js";import"./ToolbarRootContext-CF1tznBs.js";import"./composite-GDbwZnW0.js";import"./svgIconContainer-Dv1tejIq.js";import"./PdfViewerSearchBar-Bh0WXqFc.js";import"./chevron-up-7BuNfCKk.js";import"./chevron-down--eMrF9nV.js";import"./cross-B4HZSJqw.js";import"./PdfViewerSidebar-BFITsxQQ.js";import"./index-CoQOplZM.js";import"./index-SVikJX9n.js";import"./index-_iib4Iaf.js";import"./PdfViewerToolbar-DQNH7ze8.js";import"./Button-ZKTKU8-L.js";import"./chevron-right-xyfuCaCK.js";import"./Input-BU9SX9xW.js";import"./minus-BJZs7W1B.js";import"./spin-B67LDnXg.js";import"./error-BshhoQ9-.js";import"./withOsdkMetrics-21p2vZyJ.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
