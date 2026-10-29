import{j as r,M as s}from"./iframe-Bl044qnf.js";import{P as p}from"./pdf-viewer-DHP4HikH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-EFplmZfe.js";import"./preload-helper-C3nN8OhV.js";import"./PdfViewer-DRw-CZA6.js";import"./index-DUYD1b1T.js";import"./BasePdfViewer-0Bkn4tMn.js";import"./BasePdfViewer.module.css-B330iSD5.js";import"./PdfViewerAnnotationLayer-BfP9nNLw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZqZkRgN.js";import"./PdfViewerOutlineSidebar-BLtfc-LN.js";import"./PdfViewerSidebarHeader-Bn2KkVdh.js";import"./useBaseUiId-D3Tkd5iy.js";import"./useControlled-DWQwydBz.js";import"./CompositeRoot-DybAya2x.js";import"./CompositeItem-CkPEHO5z.js";import"./ToolbarRootContext-Btm4cFoY.js";import"./composite-BKeFyTtn.js";import"./svgIconContainer-DSPSIjCL.js";import"./PdfViewerSearchBar-DZjOYJlH.js";import"./chevron-up-DtOe0nLd.js";import"./chevron-down-DCr-eUT2.js";import"./cross-ByJxUK15.js";import"./PdfViewerSidebar-fRtm0n-b.js";import"./index-DPpCb37f.js";import"./index-BIw9TA11.js";import"./index-DOFCbist.js";import"./PdfViewerToolbar-DCSqmPFu.js";import"./Button-BeSccTOh.js";import"./chevron-right-CRHiJHpw.js";import"./Input-Dn6FdMxP.js";import"./search-DOyb79Ba.js";import"./spin-ByQUZxHh.js";import"./error-TWIHte5e.js";import"./withOsdkMetrics-DEGSIMfx.js";import"./makeExternalStore-DPNkNH3X.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
