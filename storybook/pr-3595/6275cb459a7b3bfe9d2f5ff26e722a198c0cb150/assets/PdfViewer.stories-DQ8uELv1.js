import{R as i,O as M,j as y,M as v}from"./iframe-DmXsd3Hy.js";import{P as D}from"./pdf-viewer-BAgLX7JS.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-XBJJThK7.js";import"./preload-helper-FNg-Yap0.js";import"./PdfRenderer-Dx1ds4xp.js";import"./index-BcT1_xRU.js";import"./PdfViewer-BGz7LqXy.js";import"./PdfViewer.module.css-Ce49z1zv.js";import"./PdfViewerAnnotationLayer-g0WSnnu4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVcryT3q.js";import"./PdfViewerOutlineSidebar-CydHrSL5.js";import"./PdfViewerSidebarHeader-_HfQJWMA.js";import"./useBaseUiId-IvYDDYe8.js";import"./useControlled-CF4bRWRe.js";import"./CompositeRoot-tZb1qfAX.js";import"./CompositeItem-BhQuDj8k.js";import"./ToolbarRootContext-CuP0sp6C.js";import"./composite-C7fLhrOp.js";import"./svgIconContainer-DChaNhbi.js";import"./PdfViewerSearchBar-DmhpNH96.js";import"./chevron-up-gK9vsh4K.js";import"./chevron-down-DXt9ZLno.js";import"./cross-DWZebUpD.js";import"./PdfViewerSidebar-N0zC1UAo.js";import"./index-R6Tv6HZ9.js";import"./index-BTiZdA37.js";import"./index-L17C4Vht.js";import"./PdfViewerToolbar-BSE6ozyX.js";import"./Button-xwJUzizH.js";import"./chevron-right-Bv3jhmLy.js";import"./Input-b6E9FUto.js";import"./minus-oMUCuRiH.js";import"./search-DuP8Iaqo.js";import"./spin-C4MmjI-5.js";import"./error-BRk3uUov.js";import"./withOsdkMetrics-C8ZLawBP.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
