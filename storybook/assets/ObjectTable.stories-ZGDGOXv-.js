import{j as i}from"./iframe-8JOFoP6w.js";import{O as p}from"./object-table-Bpoz7acy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DsQltpZe.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-De2QC20j.js";import"./index-DVXlafOG.js";import"./Dialog-CgZPGdtx.js";import"./cross-Ba_aocLO.js";import"./svgIconContainer-Bc52btQW.js";import"./useBaseUiId-DJOFV3yl.js";import"./InternalBackdrop-BC0u02pm.js";import"./composite-Dacbrp7D.js";import"./index-DABUx9II.js";import"./index-DIPLjPoi.js";import"./index-DydTQsmK.js";import"./useEventCallback-RYf_Rpw0.js";import"./SkeletonBar-DviTtz4R.js";import"./LoadingCell-BjoaI82Y.js";import"./ColumnConfigDialog-KJ4u-4ae.js";import"./DraggableList-BL0RmeUx.js";import"./search-ld6lzdhI.js";import"./Input-B80vLCMJ.js";import"./useControlled-EfqR38x7.js";import"./Button-BowFr5Gg.js";import"./small-cross-_0ChGPYI.js";import"./ActionButton-BBgXQWJV.js";import"./Checkbox-DKwxEkJA.js";import"./useValueChanged-6-LufgCy.js";import"./CollapsiblePanel-B36mIUJ8.js";import"./MultiColumnSortDialog-DXtYuqFl.js";import"./MenuTrigger-Cnbw05Jv.js";import"./CompositeItem-DOhO0oM7.js";import"./ToolbarRootContext-5xRdL1EJ.js";import"./getDisabledMountTransitionStyles-OPbP8IPW.js";import"./getPseudoElementBounds-CjsOipTW.js";import"./chevron-down-dUDP5SOr.js";import"./index-DTTaRHwW.js";import"./error-BLfUwIjQ.js";import"./BaseCbacBanner-ZBYP9bYo.js";import"./makeExternalStore-ZHAkzHUN.js";import"./Tooltip-o0yaOQGv.js";import"./PopoverPopup-fb6R-GhK.js";import"./debounce-CYBn2EID.js";import"./useOsdkClient-D2545i5_.js";import"./tick-C65V9PGT.js";import"./DropdownField-BGIt2m0K.js";import"./isEqual-CdgPAtY7.js";import"./withOsdkMetrics-DErVVM0k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
