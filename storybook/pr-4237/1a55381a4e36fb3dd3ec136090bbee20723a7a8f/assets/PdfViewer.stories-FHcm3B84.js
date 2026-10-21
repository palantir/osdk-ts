import{j as r,M as s}from"./iframe-DFGm32Bw.js";import{P as p}from"./pdf-viewer-CEctQHDA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DfSLKzpI.js";import"./preload-helper-fy9m8Fnq.js";import"./PdfViewer-BYRYxEBB.js";import"./index-DjqFaeTC.js";import"./BasePdfViewer-D56XPveb.js";import"./BasePdfViewer.module.css-C6SODAzT.js";import"./PdfViewerAnnotationLayer-B8ViMWU5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CD14WgRu.js";import"./PdfViewerOutlineSidebar-DCas0l1f.js";import"./PdfViewerSidebarHeader-CzU4nrp9.js";import"./useBaseUiId-DYKNlNgP.js";import"./useControlled-DGRdFYYN.js";import"./CompositeRoot-Bd-bK81X.js";import"./CompositeItem-BNbv7BXO.js";import"./ToolbarRootContext-8KEPzI9b.js";import"./composite-B4OJQV7f.js";import"./svgIconContainer-D-V_MVwY.js";import"./PdfViewerSearchBar-aS6OuRiT.js";import"./chevron-up-BLN9pzIf.js";import"./chevron-down-PQvYLt7R.js";import"./cross-DnLg4Ct0.js";import"./PdfViewerSidebar-W2raoVln.js";import"./index-CNgLBIA9.js";import"./index-FvgKhH5U.js";import"./index-DyySrusV.js";import"./PdfViewerToolbar-rd_ee85_.js";import"./Button-DZG39NOd.js";import"./chevron-right-Cs0rXLZP.js";import"./Input-DL-Ka-L9.js";import"./search-DNzannB5.js";import"./spin-C1_SLpHi.js";import"./error-Ce5TqXqV.js";import"./withOsdkMetrics-DGoS0Q7x.js";import"./makeExternalStore-C_KPNZSJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
