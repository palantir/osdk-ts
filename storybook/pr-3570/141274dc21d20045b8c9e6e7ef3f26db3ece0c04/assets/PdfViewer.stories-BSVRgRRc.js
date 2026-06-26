import{R as i,O as M,j as y,M as v}from"./iframe-6SOAcKwt.js";import{P as D}from"./pdf-viewer-Bue5hDBI.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-YpLwnLlQ.js";import"./preload-helper-CQG0j-BK.js";import"./PdfRenderer-BBX65EuU.js";import"./index-3H5erHsx.js";import"./PdfViewer-BIKnv6wv.js";import"./PdfViewer.module.css-DBeCxzqZ.js";import"./PdfViewerAnnotationLayer-DtrAFeXN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJ2OAmoz.js";import"./PdfViewerOutlineSidebar-B0gulcA5.js";import"./PdfViewerSidebarHeader-DZQhBiWs.js";import"./useBaseUiId-Czxfo8IM.js";import"./useControlled-DuP52GWw.js";import"./CompositeRoot-DFNrSc2e.js";import"./CompositeItem-Cxtn-smO.js";import"./ToolbarRootContext-Chwnb97Z.js";import"./composite-B0giZZNp.js";import"./svgIconContainer-CH_vOsUc.js";import"./PdfViewerSearchBar-Shi8pFeC.js";import"./chevron-up-DgPj_i-h.js";import"./chevron-down-C7GDvBPP.js";import"./cross-C0t4QVaC.js";import"./PdfViewerSidebar-DF06EwV7.js";import"./index-CFANrC0c.js";import"./index-CZqSyQ75.js";import"./index-DTzKTStT.js";import"./PdfViewerToolbar-W0QsEgx1.js";import"./Button-BrCyLpls.js";import"./chevron-right-gtwi37G4.js";import"./Input-qUkjXRhl.js";import"./minus-Byiza8_y.js";import"./search-CBP8cJDC.js";import"./spin-CZNouQ6C.js";import"./error-C4COkSXz.js";import"./withOsdkMetrics-C22T0HVQ.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
