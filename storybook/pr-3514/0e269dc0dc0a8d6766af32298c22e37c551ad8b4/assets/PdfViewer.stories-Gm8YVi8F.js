import{R as i,O as M,j as y,M as v}from"./iframe-Dt23VS2Z.js";import{P as D}from"./pdf-viewer-B4A2kqff.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CU6m38AP.js";import"./preload-helper-CDbHLuIJ.js";import"./PdfRenderer-Duv5itIu.js";import"./index-DXJEmnjN.js";import"./PdfViewer-CVcfGth6.js";import"./PdfViewer.module.css-BqsAQIxJ.js";import"./PdfViewerAnnotationLayer-BlNwR1_d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bzhco5uX.js";import"./PdfViewerOutlineSidebar-HWQpqG2h.js";import"./PdfViewerSidebarHeader-CA2f36uT.js";import"./useBaseUiId-Cw-CwzoJ.js";import"./useControlled-DOiCnDPS.js";import"./CompositeRoot-BU_6CSxE.js";import"./CompositeItem-O_elIjk1.js";import"./ToolbarRootContext-D9DfySWd.js";import"./composite-CZm5T3m5.js";import"./svgIconContainer-Dcx_fEGI.js";import"./PdfViewerSearchBar-S1ktPGyp.js";import"./chevron-up-BSBxO3av.js";import"./chevron-down-CVpGfrz_.js";import"./cross-CcucmV0I.js";import"./PdfViewerSidebar-CDVCHjak.js";import"./index-RtMEqfR-.js";import"./index-BJQE82NE.js";import"./index-Diirl9qd.js";import"./PdfViewerToolbar-RywF9v8d.js";import"./Button-EnTVyLw_.js";import"./chevron-right-DL58ksOb.js";import"./Input-B7lTQB0Z.js";import"./minus-DS_onhdK.js";import"./spin-Bb7Hf42g.js";import"./error-CCtxrEto.js";import"./withOsdkMetrics-BYt--z85.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
