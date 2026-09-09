import{j as r,M as s}from"./iframe-BBZCzStV.js";import{P as p}from"./pdf-viewer-DBIyXLEZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cz-L3S7b.js";import"./preload-helper-5SQDyWdl.js";import"./PdfViewer-HCwTv4f1.js";import"./index-B0mBcXI4.js";import"./BasePdfViewer-BhFGIiRv.js";import"./BasePdfViewer.module.css-Dh9mRXQP.js";import"./PdfViewerAnnotationLayer-Bnbe9fPX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CH1w2Ooq.js";import"./PdfViewerOutlineSidebar-DM76Ikc1.js";import"./PdfViewerSidebarHeader-Da2NYmxb.js";import"./useBaseUiId-B2Dwi3UQ.js";import"./useControlled-DoPklQtk.js";import"./CompositeRoot-BYRK20jY.js";import"./CompositeItem-DCNZBIgo.js";import"./ToolbarRootContext-BJ5gq2Ug.js";import"./composite-CFasADcm.js";import"./svgIconContainer-DfBgJD9-.js";import"./PdfViewerSearchBar-BfNy5oCH.js";import"./chevron-up-BZkwAn-s.js";import"./chevron-down-CMFHrqJp.js";import"./cross-CPvMVENn.js";import"./PdfViewerSidebar-BVwcTkuS.js";import"./index-DbFsgQOw.js";import"./index-Cj4Q5m-x.js";import"./index-V3B_uiL2.js";import"./PdfViewerToolbar-IND3EP0G.js";import"./Button-CfbDmY7F.js";import"./chevron-right-DcA8KPgu.js";import"./Input-CSnQRyFu.js";import"./search-vc9aoGpm.js";import"./spin-Bz7g2JDD.js";import"./error-DTmGvXOz.js";import"./withOsdkMetrics-mfymYHOu.js";import"./makeExternalStore-C0iVHY1V.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
