import{R as i,O as M,j as y,M as v}from"./iframe-zaJlvm-g.js";import{P as D}from"./pdf-viewer-BGnJZqNf.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CiJecHn6.js";import"./preload-helper-B0t6R1ee.js";import"./PdfRenderer-DqyJRVt6.js";import"./index-CWWZPObL.js";import"./PdfViewer-Dll1R0I_.js";import"./PdfViewer.module.css-GsYGgxl9.js";import"./PdfViewerAnnotationLayer-ChON8Xxd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-dpg_2WsK.js";import"./PdfViewerOutlineSidebar-C1yb_b0P.js";import"./PdfViewerSidebarHeader-BU2ODRI9.js";import"./useBaseUiId-C-uUecG4.js";import"./useControlled-ypXp9mhF.js";import"./CompositeRoot-CQsGzYoo.js";import"./CompositeItem-BStSAoQl.js";import"./ToolbarRootContext-B7TsEC2Q.js";import"./composite-DjzyHNH4.js";import"./svgIconContainer-Co48vgDE.js";import"./PdfViewerSearchBar-EB8eQ8JB.js";import"./chevron-up-BhoEMvmL.js";import"./chevron-down-CzFuY56N.js";import"./cross-DUEh2j-2.js";import"./PdfViewerSidebar-D94SQ9Eb.js";import"./index-C3ZHtZdJ.js";import"./index-D1uwh1-2.js";import"./index-CnrbqwrJ.js";import"./PdfViewerToolbar-Cl2uxHT7.js";import"./Button-BuBVF9e8.js";import"./chevron-right-DEyTsjHu.js";import"./Input-CA4HS9Zv.js";import"./minus-DbNckBt2.js";import"./search-KM4R92ev.js";import"./spin-ClR6YFsU.js";import"./error-Dd7U7SLW.js";import"./withOsdkMetrics-C1F_Wwv9.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
