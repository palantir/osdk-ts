import{j as r,M as s}from"./iframe-Q3lyvqpT.js";import{P as p}from"./pdf-viewer-Dg9E7FNf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ys7f2rgA.js";import"./preload-helper-C1UOXpSy.js";import"./PdfViewer-CbpGOIKZ.js";import"./index-DeVeQfvD.js";import"./BasePdfViewer-33EdcRFj.js";import"./BasePdfViewer.module.css-Bz5hAerL.js";import"./PdfViewerAnnotationLayer-DYbvAFeC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRlhkdb6.js";import"./PdfViewerOutlineSidebar-B8jKKCAj.js";import"./PdfViewerSidebarHeader-BHpRZyFP.js";import"./useBaseUiId-TlHWJ25V.js";import"./useControlled-D3J0OrAn.js";import"./CompositeRoot-BnK9Ib9P.js";import"./CompositeItem-BdfVH036.js";import"./ToolbarRootContext-bI52zd0O.js";import"./composite-BRlBDXOv.js";import"./svgIconContainer-_aeVyyfk.js";import"./PdfViewerSearchBar-DCU1JGlY.js";import"./chevron-up-zPXRjtQS.js";import"./chevron-down-CyTKzqpr.js";import"./cross-0utMfnpw.js";import"./PdfViewerSidebar-Ij7-une1.js";import"./index-CCtIAxk4.js";import"./index-BgSh7jc2.js";import"./index-Bkfj5pmT.js";import"./PdfViewerToolbar-DVKRh64i.js";import"./Button-7q-Awilo.js";import"./chevron-right-BauWD76u.js";import"./Input-DsdhnLi8.js";import"./search-DRlPV6Yf.js";import"./spin-CNyARoWK.js";import"./error-CMb3oavi.js";import"./withOsdkMetrics-PcCF_U4s.js";import"./makeExternalStore-DEfXnagi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
