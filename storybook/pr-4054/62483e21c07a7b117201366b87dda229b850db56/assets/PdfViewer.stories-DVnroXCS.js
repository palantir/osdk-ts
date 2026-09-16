import{j as r,M as s}from"./iframe-CVz_WeOC.js";import{P as p}from"./pdf-viewer-B91NkpAp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BeEe41SB.js";import"./preload-helper-D0q6PXbw.js";import"./PdfViewer-mc1wua6v.js";import"./index-BDflHgEd.js";import"./BasePdfViewer-DvZNQAtn.js";import"./BasePdfViewer.module.css-BZBxQbBn.js";import"./PdfViewerAnnotationLayer-BbHSC_2v.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DwkzQm5O.js";import"./PdfViewerOutlineSidebar-CQi7q8bF.js";import"./PdfViewerSidebarHeader-BYdud0r9.js";import"./useBaseUiId-tRRlvhxI.js";import"./useControlled-D3k60qqO.js";import"./CompositeRoot-yESHWrl7.js";import"./CompositeItem-D5028N7a.js";import"./ToolbarRootContext-BUfksNXb.js";import"./composite-Dj-vL0W9.js";import"./svgIconContainer-D2LVORHL.js";import"./PdfViewerSearchBar-ChsLOnds.js";import"./chevron-up-DuoexgqE.js";import"./chevron-down-D7PojQw9.js";import"./cross-C8noeNqn.js";import"./PdfViewerSidebar-Cr1WP2ms.js";import"./index-BZxaJOaP.js";import"./index-DIHi61Zo.js";import"./index-Cd-fS6dr.js";import"./PdfViewerToolbar-B8novpqZ.js";import"./Button-DhCGu5I6.js";import"./chevron-right-DUuLnLvv.js";import"./Input-BT5FMPCr.js";import"./search-DCAwdpsl.js";import"./spin-CxjfcMwT.js";import"./error-DIsBLczr.js";import"./withOsdkMetrics-h90fRcpC.js";import"./makeExternalStore-CChDsTbl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
