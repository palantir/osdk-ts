import{j as i}from"./iframe-CYRFLlEO.js";import{O as p}from"./object-table-DaNbMdac.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D_oDjEym.js";import"./preload-helper-ChluBdBb.js";import"./Table-DeorVykX.js";import"./index-DgFaecLv.js";import"./Dialog-C6L85Dhc.js";import"./cross-DBpyyU9C.js";import"./svgIconContainer-DXkF8wrQ.js";import"./useBaseUiId-CT8xqfBr.js";import"./InternalBackdrop-CTPF33qa.js";import"./composite-DBnR4BVO.js";import"./index-C8sdjwtp.js";import"./index-BCjTJI3_.js";import"./index-C2MDVEGT.js";import"./useEventCallback-BJFvrRyb.js";import"./SkeletonBar-Bq3sXSF2.js";import"./LoadingCell-itgjIH8K.js";import"./ColumnConfigDialog-DbPbP15T.js";import"./DraggableList-BRGnhRIN.js";import"./search-gMbThLhN.js";import"./Input-CemPVcnY.js";import"./useControlled-D5UJw3Fq.js";import"./Button-CGEba4bS.js";import"./small-cross-BXgSEa8S.js";import"./ActionButton-D0Fx6r_2.js";import"./Checkbox-C5DJcaMm.js";import"./useValueChanged-CsL5tjte.js";import"./CollapsiblePanel-D8-L6clc.js";import"./MultiColumnSortDialog-CVgjOhqE.js";import"./MenuTrigger-B4oHyfVO.js";import"./CompositeItem-EG5A4Ctt.js";import"./ToolbarRootContext-DIul4zOr.js";import"./getDisabledMountTransitionStyles-DPyBQpoo.js";import"./getPseudoElementBounds-C_2zFZOn.js";import"./chevron-down-QtZPW63O.js";import"./index-BjdI_b09.js";import"./error-CvsmrG6o.js";import"./BaseCbacBanner-Dz0E0Sve.js";import"./makeExternalStore-B-fBg6wj.js";import"./Tooltip-Dib25ex8.js";import"./PopoverPopup-DotHPyVZ.js";import"./debounce-BWdTtlOi.js";import"./useOsdkClient-BJqJ3t0X.js";import"./tick-BxUNHTte.js";import"./DropdownField-wXZN_aVL.js";import"./isEqual-a93sYdb6.js";import"./withOsdkMetrics-Ihi9z85c.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
