import{R as i,O as M,j as y,M as v}from"./iframe-Tmq9KCpc.js";import{P as D}from"./pdf-viewer-Tb-_D4FU.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-RjVLrk3T.js";import"./preload-helper-DLGqi4dC.js";import"./PdfRenderer-Xu-eS9Tk.js";import"./index-B3-Jf5q4.js";import"./PdfViewer-D5BHAAQi.js";import"./PdfViewer.module.css-DkGCGqlV.js";import"./PdfViewerAnnotationLayer-DKt_JsP4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpzGXQjv.js";import"./PdfViewerOutlineSidebar-DEIRaXqc.js";import"./PdfViewerSidebarHeader-C7sOel6A.js";import"./useBaseUiId-CDHglk1S.js";import"./useControlled-D-cUaZGk.js";import"./CompositeRoot-DUPQGd3W.js";import"./CompositeItem-Njv-UL0-.js";import"./ToolbarRootContext-CO46LevS.js";import"./composite-z6wOCmoj.js";import"./svgIconContainer-SeCgGy2c.js";import"./PdfViewerSearchBar-CXRAJWAt.js";import"./chevron-up-ucPbV9vW.js";import"./chevron-down-CtrzDWNG.js";import"./cross-CyyHn5eQ.js";import"./PdfViewerSidebar-_OBaIbg0.js";import"./index-CSeUdJKV.js";import"./index-B0MERIRr.js";import"./index-DdZtAD9D.js";import"./PdfViewerToolbar-CVSQ80H4.js";import"./Button-Can0oDI1.js";import"./chevron-right-9gQ51xyT.js";import"./Input-CJHQs4S-.js";import"./minus-mJpqaYf6.js";import"./spin-BzEmS_mt.js";import"./error-BYw7g7-I.js";import"./withOsdkMetrics-BIxYACPr.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
