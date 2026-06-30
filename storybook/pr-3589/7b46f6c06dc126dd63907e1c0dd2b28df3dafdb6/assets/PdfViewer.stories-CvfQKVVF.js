import{R as i,O as M,j as y,M as v}from"./iframe-OmSGaNMj.js";import{P as D}from"./pdf-viewer-D1EEh56s.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DPvRmNE7.js";import"./preload-helper-BxTFTclk.js";import"./PdfRenderer-C0_mbfqT.js";import"./index-Csst3lF4.js";import"./PdfViewer-CEhbvyXh.js";import"./PdfViewer.module.css-0Q1s9Bta.js";import"./PdfViewerAnnotationLayer-D9txVqrh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4xOCFfz.js";import"./PdfViewerOutlineSidebar-CGJan4OA.js";import"./PdfViewerSidebarHeader-CECg02rh.js";import"./useBaseUiId-D4LJig10.js";import"./useControlled-DDBgOSEI.js";import"./CompositeRoot-BXLq_etx.js";import"./CompositeItem-D9sf5ABe.js";import"./ToolbarRootContext-z4tZARu2.js";import"./composite-DbP2kJ4g.js";import"./svgIconContainer-B_tunsrW.js";import"./PdfViewerSearchBar-EOgCO-_2.js";import"./chevron-up-Dz4V2MSA.js";import"./chevron-down-Vm8dnS-v.js";import"./cross-QB_I_1on.js";import"./PdfViewerSidebar-PiPEhBVc.js";import"./index-YTYrmtEq.js";import"./index-iJ6fimfD.js";import"./index-CBhglGWR.js";import"./PdfViewerToolbar-D7WPd2oI.js";import"./Button-D7UfI-My.js";import"./chevron-right-DrFBCs4T.js";import"./Input-DhRElkh1.js";import"./minus--kxQeT7R.js";import"./search-ChqSwl5J.js";import"./spin-BN1EBdlu.js";import"./error-Dtvo8XX1.js";import"./withOsdkMetrics-CfiDkPmx.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
