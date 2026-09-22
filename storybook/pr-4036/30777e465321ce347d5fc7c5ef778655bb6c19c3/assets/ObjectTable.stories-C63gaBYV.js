import{j as i}from"./iframe-8DMGEq06.js";import{O as p}from"./object-table-BsZYmEG3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-UZDq0JOo.js";import"./preload-helper-BjAl-lK2.js";import"./Table-DORoQaHE.js";import"./index-DRq4gjPq.js";import"./Dialog-CNRW78Mx.js";import"./cross-DYaZw4Am.js";import"./svgIconContainer-B8_9Y0Zn.js";import"./useBaseUiId-B2FWNhGQ.js";import"./InternalBackdrop-CWiPG24p.js";import"./composite-CY_QXMLo.js";import"./index-D4LKk0YB.js";import"./index-mbbVtxqA.js";import"./index-Dx7C8aHO.js";import"./useEventCallback-3GlyZw2_.js";import"./SkeletonBar-Dc166Tvt.js";import"./LoadingCell-5wJcQGJ6.js";import"./ColumnConfigDialog--uixhz1y.js";import"./DraggableList-BqW39Lky.js";import"./search-CvifUsIK.js";import"./Input-dydaNapo.js";import"./useControlled-Khc0ddfA.js";import"./Button-CraGbNXA.js";import"./small-cross-CfjvRjN5.js";import"./ActionButton-BmVKHj0Y.js";import"./Checkbox-B-2SdFMj.js";import"./useValueChanged-N306h0K2.js";import"./CollapsiblePanel-BE0AM26B.js";import"./MultiColumnSortDialog-D2g0nz-7.js";import"./MenuTrigger-Byl2G7nz.js";import"./CompositeItem-Bb2gn4Bj.js";import"./ToolbarRootContext-Bepk2A_H.js";import"./getDisabledMountTransitionStyles-Dw-8Jwwa.js";import"./getPseudoElementBounds-C27BHV4s.js";import"./chevron-down-F_95MoSJ.js";import"./index-CsyOcyyy.js";import"./error-CiLZ8SWq.js";import"./BaseCbacBanner-R0l1YhLX.js";import"./makeExternalStore-NZ3mh5Ti.js";import"./Tooltip-CJOrSGc2.js";import"./PopoverPopup-CRsLokny.js";import"./debounce-D_Y9TVaa.js";import"./useOsdkClient-C_eIZF2J.js";import"./tick-IbzJph_T.js";import"./DropdownField-Bu7UETX6.js";import"./isEqual-ChBZ-47I.js";import"./withOsdkMetrics-DCPVCTJZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
