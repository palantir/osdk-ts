import{j as i}from"./iframe-BXNko62s.js";import{O as p}from"./object-table-BQNnLDn7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-4n18uZN6.js";import"./preload-helper-Bj6UNjqi.js";import"./Table-D7LzyEaH.js";import"./index-BraeF99A.js";import"./Dialog-Ro4O5HA1.js";import"./cross-CxMC5EUY.js";import"./svgIconContainer-DY8ASQOr.js";import"./useBaseUiId-Ca98QWO9.js";import"./InternalBackdrop-BbBElhcW.js";import"./composite-C9CWzIa9.js";import"./index-BFgBDgmk.js";import"./index-CCQ5u4Ue.js";import"./index-BJy_f7fa.js";import"./useEventCallback-DgeT9ZNj.js";import"./SkeletonBar-D1qxCam4.js";import"./LoadingCell-B0CJVPiT.js";import"./ColumnConfigDialog-DNqQ-Oum.js";import"./DraggableList-IBkcEZag.js";import"./search-0j6eRv30.js";import"./Input-DXEo1WM0.js";import"./useControlled-B2FQFptp.js";import"./Button-Cb25ceXV.js";import"./small-cross-C8K6sWXT.js";import"./ActionButton-BE6hJp0R.js";import"./Checkbox-BIQR1PfE.js";import"./useValueChanged-BQ311yh_.js";import"./CollapsiblePanel-Cyvbu1GF.js";import"./MultiColumnSortDialog-CvcuatNu.js";import"./MenuTrigger-Dd2kzYgY.js";import"./CompositeItem-BnI6v8nN.js";import"./ToolbarRootContext-BpFYZMLv.js";import"./getDisabledMountTransitionStyles-DcJvx271.js";import"./getPseudoElementBounds-8XCyV84c.js";import"./chevron-down-Za9QV_62.js";import"./index-hSkBF6vZ.js";import"./error-CgTFtvP9.js";import"./BaseCbacBanner-3-2aKYTm.js";import"./makeExternalStore-BdN3LE2k.js";import"./Tooltip-Cy_tDvEN.js";import"./PopoverPopup-fmJe70Q9.js";import"./debounce-DTLh2Ef3.js";import"./useOsdkClient-Cn5D3g-o.js";import"./tick-qSbAdot2.js";import"./DropdownField--_gkEn_J.js";import"./isEqual-CEZhzjj7.js";import"./withOsdkMetrics-BmO3Nivv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
