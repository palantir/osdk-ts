import{R as i,O as M,j as y,M as v}from"./iframe-Dem1jDDS.js";import{P as D}from"./pdf-viewer-DOSqoi60.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Ci6FMxJw.js";import"./preload-helper-G63TiWQ_.js";import"./PdfRenderer-BNuWRJxV.js";import"./index-BCRd_LMW.js";import"./PdfViewer-DaluSLbF.js";import"./PdfViewer.module.css-DkdxtyPg.js";import"./PdfViewerAnnotationLayer-B5frvKO1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5uJhgPkq.js";import"./PdfViewerOutlineSidebar-BFLRXvnY.js";import"./PdfViewerSidebarHeader-B3I-YtWE.js";import"./useBaseUiId-Cg-XwDDy.js";import"./useControlled-BiLVvTH4.js";import"./CompositeRoot-CPvoA-eJ.js";import"./CompositeItem-DiidbYEL.js";import"./ToolbarRootContext-prEa1F63.js";import"./composite-wCVm2Dol.js";import"./svgIconContainer-DU8ZRB9_.js";import"./PdfViewerSearchBar-BSXC_alq.js";import"./chevron-up-Bnjvv-G4.js";import"./chevron-down-D--xe1Ur.js";import"./cross-D5PF6dfy.js";import"./PdfViewerSidebar-CMjVIDb6.js";import"./index-BTI5iaOB.js";import"./index-DqaMI3eV.js";import"./index-Dtm-sfXF.js";import"./PdfViewerToolbar-CzpNUVD0.js";import"./Button-Cu6j3cTw.js";import"./chevron-right-Dzmqrs9c.js";import"./Input-CNzowxc_.js";import"./minus-B2lnROIu.js";import"./search-qlQl-7pj.js";import"./spin-pp44M1fU.js";import"./error-C9rz3Y7J.js";import"./withOsdkMetrics-RpJi84Zv.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
