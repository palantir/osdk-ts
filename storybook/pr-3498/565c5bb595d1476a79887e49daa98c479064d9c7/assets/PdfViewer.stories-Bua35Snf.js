import{R as i,O as M,j as y,M as v}from"./iframe-BQgTT6N0.js";import{P as D}from"./pdf-viewer-CJi0ukwa.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CSl6TaXk.js";import"./preload-helper-BffpQyeb.js";import"./PdfRenderer-DGfeYOzC.js";import"./index-HnAdOqsd.js";import"./PdfViewer-Cj-disaF.js";import"./PdfViewer.module.css-CXqy3hQs.js";import"./PdfViewerAnnotationLayer-CtZ1VxFN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cq8T4Osi.js";import"./PdfViewerOutlineSidebar-BYBKtfLT.js";import"./PdfViewerSidebarHeader-BJwMsTek.js";import"./useBaseUiId-D_XYE6j1.js";import"./useControlled-jjLK3_9U.js";import"./CompositeRoot-CyJLiqYt.js";import"./CompositeItem-DT371y7B.js";import"./ToolbarRootContext-Ces_NeE2.js";import"./composite-kuLapxZy.js";import"./svgIconContainer-BOCAU5k6.js";import"./PdfViewerSearchBar-Uyn_nSTy.js";import"./chevron-up-cZg0-28z.js";import"./chevron-down-O2cjp07V.js";import"./cross-BCyUgecY.js";import"./PdfViewerSidebar-BXd0El67.js";import"./index-CNpFCfpQ.js";import"./index-PRpzADiJ.js";import"./index-F5P1QzXV.js";import"./PdfViewerToolbar-BdEA4p9k.js";import"./Button-CnGfZPyI.js";import"./chevron-right-DEXDFuJO.js";import"./Input-LIwQJJUk.js";import"./minus-Cw8PulDc.js";import"./spin-DC_BfZ5m.js";import"./error-j2UvKzh8.js";import"./withOsdkMetrics-LSZgh3q5.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
