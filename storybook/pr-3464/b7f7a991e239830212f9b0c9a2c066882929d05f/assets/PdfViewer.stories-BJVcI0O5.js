import{R as i,O as M,j as y,M as v}from"./iframe-Bg2tdbhw.js";import{P as D}from"./pdf-viewer-CXge8H56.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DKBlb9J_.js";import"./preload-helper-BJ2h9Z3P.js";import"./PdfRenderer-DN9rT2SX.js";import"./index-DKCNWX5P.js";import"./PdfViewer-IaUTBpH4.js";import"./PdfViewer.module.css-DTV0WMFh.js";import"./PdfViewerAnnotationLayer-S6kmY68k.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvsyKFOF.js";import"./PdfViewerOutlineSidebar-C_Zf0IPo.js";import"./PdfViewerSidebarHeader-Dox3jLNR.js";import"./useBaseUiId-CmShBS4E.js";import"./useControlled-CABvNtdU.js";import"./CompositeRoot-DqEDfhh1.js";import"./CompositeItem-BOkTSBHI.js";import"./ToolbarRootContext-CjlXcYih.js";import"./composite-WuBsguEZ.js";import"./svgIconContainer-BKy6MW2l.js";import"./PdfViewerSearchBar-DGmiH22k.js";import"./chevron-up-GPoTojjl.js";import"./chevron-down-BsJmxCP1.js";import"./cross-CSAJ6NGt.js";import"./PdfViewerSidebar-BBExJwuN.js";import"./index-D5BHG7ss.js";import"./index-BqzwnnAx.js";import"./index-BGzQ98DL.js";import"./PdfViewerToolbar-D-OGOwOZ.js";import"./Button-B-5c89Rn.js";import"./chevron-right-DFpnZny2.js";import"./Input-BJ_M4j-9.js";import"./minus-DiSzlybj.js";import"./search-D2VSB8NA.js";import"./spin-WsxBths3.js";import"./error-B9bcZORz.js";import"./withOsdkMetrics-BQEHtTjv.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
