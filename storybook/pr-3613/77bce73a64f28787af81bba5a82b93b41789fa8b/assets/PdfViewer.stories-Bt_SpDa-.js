import{R as i,O as M,j as y,M as v}from"./iframe-p490nonH.js";import{P as D}from"./pdf-viewer-CH7KpcnJ.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CDK13bzX.js";import"./preload-helper-BIcftnno.js";import"./PdfRenderer-QlRsrfs3.js";import"./index-52NS_aRn.js";import"./PdfViewer-B19RoEQI.js";import"./PdfViewer.module.css-6OymtYw8.js";import"./PdfViewerAnnotationLayer-DTKVswXb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYJO-g6A.js";import"./PdfViewerOutlineSidebar-Bo2zE587.js";import"./PdfViewerSidebarHeader-BcF8tyC6.js";import"./useBaseUiId-VK_cNWma.js";import"./useControlled-BWvN-8Kn.js";import"./CompositeRoot-Cpc9mnLC.js";import"./CompositeItem-B5C5mptb.js";import"./ToolbarRootContext-C9wWIi1V.js";import"./composite-aw4zcgXT.js";import"./svgIconContainer-C6RHrBFn.js";import"./PdfViewerSearchBar-pTLfOwz7.js";import"./chevron-up-zuu5FNac.js";import"./chevron-down-DQOkHGl7.js";import"./cross-BDCEJ8IA.js";import"./PdfViewerSidebar-YoXPTE8Z.js";import"./index-BVCoQIzt.js";import"./index-PVazNw2_.js";import"./index-pcbqRC2-.js";import"./PdfViewerToolbar-FJTpsQVG.js";import"./Button-CG83dhiX.js";import"./chevron-right-2NxAu_h3.js";import"./Input-YQC5y0gd.js";import"./minus-DGZK7YQd.js";import"./search-jVbUyNWV.js";import"./spin-dax37Hw8.js";import"./error-DmWs_i4H.js";import"./withOsdkMetrics-xECZZGPA.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
