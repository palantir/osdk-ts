import{j as r,M as s}from"./iframe-BGhobRtu.js";import{P as p}from"./pdf-viewer-DxD2bCm4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DxHb66Kg.js";import"./preload-helper-pGzP1r6a.js";import"./PdfViewer-Dx2z99wa.js";import"./index-vtFPCgDX.js";import"./BasePdfViewer-BPzsTPt5.js";import"./BasePdfViewer.module.css-BzexBz_H.js";import"./PdfViewerAnnotationLayer-zNmAEmxC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6AgzrL3.js";import"./PdfViewerOutlineSidebar-KoOrc_Sx.js";import"./PdfViewerSidebarHeader-BLwpDxBj.js";import"./useBaseUiId-DQZ7iRRg.js";import"./useControlled-Dp1hI4GV.js";import"./CompositeRoot--woMTd9b.js";import"./CompositeItem-C8P235hg.js";import"./ToolbarRootContext-DV_dajLa.js";import"./composite-N1fMxm4N.js";import"./svgIconContainer-B7bAtHsS.js";import"./PdfViewerSearchBar-C_ny_4ed.js";import"./chevron-up-CzjEd9u5.js";import"./chevron-down-DAtIJVst.js";import"./cross-CuYz6VCw.js";import"./PdfViewerSidebar-DgG0hDpY.js";import"./index-EPx86zSw.js";import"./index-qA_bivHa.js";import"./index-C0Y6HNv7.js";import"./PdfViewerToolbar-BGpdt9Et.js";import"./Button-DAz_khhf.js";import"./chevron-right-DEz8fcwi.js";import"./Input-C3PEeUtQ.js";import"./search-CD-rabLl.js";import"./spin-3jFEliKG.js";import"./error-CFVPudD2.js";import"./withOsdkMetrics-qR-yFxPK.js";import"./makeExternalStore-Imo5q4ya.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
