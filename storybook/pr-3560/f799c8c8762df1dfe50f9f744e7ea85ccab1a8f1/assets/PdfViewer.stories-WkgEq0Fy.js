import{R as i,O as M,j as y,M as v}from"./iframe-zteb0Xyj.js";import{P as D}from"./pdf-viewer-BIIqVk7A.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CZtlm_Df.js";import"./preload-helper-CnLc9qFN.js";import"./PdfRenderer-BQO1gRoR.js";import"./index-dSjsE8RW.js";import"./PdfViewer-DcffqWVf.js";import"./PdfViewer.module.css-DIs74zbx.js";import"./PdfViewerAnnotationLayer-DLBe54x_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_Svd7Bjy.js";import"./PdfViewerOutlineSidebar-dZLq8Ow4.js";import"./PdfViewerSidebarHeader-JAJwg3Tm.js";import"./useBaseUiId-DlSM7y6E.js";import"./useControlled-BEA61zL3.js";import"./CompositeRoot-Fw6Iwwuw.js";import"./CompositeItem-C1poiRt6.js";import"./ToolbarRootContext-Bvbv37Tp.js";import"./composite-B96iUAZi.js";import"./svgIconContainer-J10G18tu.js";import"./PdfViewerSearchBar-Dqj22e3Y.js";import"./chevron-up-NUZ_0X6f.js";import"./chevron-down-0GMk4d7M.js";import"./cross-D1yyTTFq.js";import"./PdfViewerSidebar-P7gVArLS.js";import"./index-CNpyvC6R.js";import"./index-d7u9CeiR.js";import"./index-DDFyyXsy.js";import"./PdfViewerToolbar-C34CNXMW.js";import"./Button-BLu70Vo5.js";import"./chevron-right-C1o2__jI.js";import"./Input-g3v5n7GW.js";import"./minus-2kKXYvCz.js";import"./spin-Dxoc07xG.js";import"./error-C4fzOD38.js";import"./withOsdkMetrics-CwI3g_U6.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
