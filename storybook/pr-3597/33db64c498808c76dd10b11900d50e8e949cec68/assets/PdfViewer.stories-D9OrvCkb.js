import{R as i,O as M,j as y,M as v}from"./iframe-l9qVKk_h.js";import{P as D}from"./pdf-viewer-DX2EKne0.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-B8M-W7eB.js";import"./preload-helper-CeAAu9IW.js";import"./PdfRenderer-Bl3eLfXx.js";import"./index-BHoGjpS3.js";import"./PdfViewer-DAI9KF68.js";import"./PdfViewer.module.css-Br-PAlUw.js";import"./PdfViewerAnnotationLayer-C5hVSmco.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bg8SkZeP.js";import"./PdfViewerOutlineSidebar-CiTfr9rm.js";import"./PdfViewerSidebarHeader-CfpJmaH6.js";import"./useBaseUiId-CbnfRBmg.js";import"./useControlled-EjYXBnqg.js";import"./CompositeRoot-BuoO7OhF.js";import"./CompositeItem-B4j-arzc.js";import"./ToolbarRootContext-CzIYjHZF.js";import"./composite-D-4XrB5f.js";import"./svgIconContainer-CAzybjiF.js";import"./PdfViewerSearchBar-BLB-KZt6.js";import"./chevron-up-BwrB3q47.js";import"./chevron-down-Do-BqmH3.js";import"./cross-Ds51LG9m.js";import"./PdfViewerSidebar-0jdk99-M.js";import"./index-CZkQaOL2.js";import"./index-DpMQMu1P.js";import"./index-a_QuptCd.js";import"./PdfViewerToolbar-DTFnCIQh.js";import"./Button-BaDSsPLP.js";import"./chevron-right-P3ejxeZp.js";import"./Input-BqbMFRQb.js";import"./minus-DYhHf52e.js";import"./search-nFffqI-8.js";import"./spin-_l3awb34.js";import"./error-DwWpVcA1.js";import"./withOsdkMetrics-Crh41W7X.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
