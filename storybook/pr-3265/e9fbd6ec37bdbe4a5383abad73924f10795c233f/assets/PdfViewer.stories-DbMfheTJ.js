import{R as i,O as M,j as y,M as v}from"./iframe-rYyjN1FS.js";import{P as D}from"./pdf-viewer-DmD2FzUQ.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-acP89Q3x.js";import"./preload-helper-DwOkEC9e.js";import"./PdfRenderer-D7tGNabi.js";import"./index-PWNJeJ4B.js";import"./PdfViewer-CufSK4Dd.js";import"./PdfViewer.module.css-CmBxc7G1.js";import"./PdfViewerAnnotationLayer-CkGxJ9Xr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZmHCGxZh.js";import"./PdfViewerOutlineSidebar-Cl9g0rro.js";import"./PdfViewerSidebarHeader-CGIPGkQP.js";import"./useBaseUiId-CQD2o2tA.js";import"./useControlled-BTr5Jg05.js";import"./CompositeRoot-urS_r5cq.js";import"./CompositeItem-CMzdyx9O.js";import"./ToolbarRootContext-BaY47ftM.js";import"./composite-By-HW_ry.js";import"./svgIconContainer-BEMLZm2t.js";import"./PdfViewerSearchBar-DWz7-DEb.js";import"./chevron-up-DPw0K9Wj.js";import"./chevron-down-BDnzlmAQ.js";import"./cross-BSvjvGg-.js";import"./PdfViewerSidebar-DI6PD-w3.js";import"./index-B4zDCH9M.js";import"./index-Bh6NEvhj.js";import"./index-DO3Y63L9.js";import"./PdfViewerToolbar-F9A7eFZr.js";import"./Button-BXo2_s7Y.js";import"./chevron-right-CJR2FM-O.js";import"./Input-fTVX9UVJ.js";import"./minus-CMbldKFP.js";import"./spin-B9N1-dNC.js";import"./error-BcTK3dOp.js";import"./withOsdkMetrics-BikHQ76e.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
