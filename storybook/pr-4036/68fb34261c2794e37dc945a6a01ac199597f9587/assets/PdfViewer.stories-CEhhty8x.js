import{j as r,M as s}from"./iframe-YNEpMth_.js";import{P as p}from"./pdf-viewer-vGXM6Dep.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-p_7PvSls.js";import"./preload-helper-DJ1mpgSP.js";import"./PdfViewer-D7LmJb8n.js";import"./index-B2puki5T.js";import"./BasePdfViewer-B1Zltl4K.js";import"./BasePdfViewer.module.css-Bz-D2_zI.js";import"./PdfViewerAnnotationLayer-B3YBHPR-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9UdjOvq.js";import"./PdfViewerOutlineSidebar-DZgrwaH4.js";import"./PdfViewerSidebarHeader-Jek79Cy6.js";import"./useBaseUiId-CHPLJ4sE.js";import"./useControlled-BW2zwjNJ.js";import"./CompositeRoot-CF9u9FGy.js";import"./CompositeItem-C4SXKvmu.js";import"./ToolbarRootContext-D9Oiyr8g.js";import"./composite-vOR0gMDm.js";import"./svgIconContainer-BhHr47Fp.js";import"./PdfViewerSearchBar-B8Y01B3r.js";import"./chevron-up-Ct6tyaz2.js";import"./chevron-down-UgMmigdo.js";import"./cross-C6C4JYc8.js";import"./PdfViewerSidebar-DToLHKPt.js";import"./index-DuH1OBFw.js";import"./index-rgrCnizS.js";import"./index-CyFPGQhr.js";import"./PdfViewerToolbar-CpgYQ84U.js";import"./Button-Cg8b97WO.js";import"./chevron-right-B1uTqPiu.js";import"./Input-pwxvUMdX.js";import"./search-uuqEPS6n.js";import"./spin-DX-gaI_b.js";import"./error-VfGLFz6H.js";import"./withOsdkMetrics-CvLC4P61.js";import"./makeExternalStore-VqCxcddq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
