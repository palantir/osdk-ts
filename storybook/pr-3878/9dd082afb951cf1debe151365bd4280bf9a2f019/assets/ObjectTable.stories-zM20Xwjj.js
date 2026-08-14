import{j as i}from"./iframe-DOW2bXFs.js";import{O as p}from"./object-table-BNlthN64.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-wD6ebFAs.js";import"./preload-helper-BHuniwci.js";import"./Table-BXikgICs.js";import"./index-4oJsk_tB.js";import"./Dialog-CQdhf3N7.js";import"./cross-COlHBJoz.js";import"./svgIconContainer-CT_KO30M.js";import"./useBaseUiId-B_0mQGPv.js";import"./InternalBackdrop-lPwjztDu.js";import"./composite-CqPSq466.js";import"./index-Bn8LPSeX.js";import"./index-GSo9ng3g.js";import"./index-C6M1k-et.js";import"./useEventCallback-B3VaIBrg.js";import"./SkeletonBar-DxdJn7gH.js";import"./LoadingCell-DJ0lzlCl.js";import"./ColumnConfigDialog-C04281-e.js";import"./DraggableList-DStVGJZI.js";import"./search-BWbB-AxZ.js";import"./Input-CSOHEyA0.js";import"./useControlled-NJi6VJOf.js";import"./Button-DZdYaU0k.js";import"./small-cross-iF7SW867.js";import"./ActionButton-CM1odkW5.js";import"./Checkbox-08T_vGQ7.js";import"./useValueChanged-TiwULohc.js";import"./CollapsiblePanel-BALGGoSD.js";import"./MultiColumnSortDialog-BO8WXNUG.js";import"./MenuTrigger-DtqoUMjg.js";import"./CompositeItem-CPRbyJMO.js";import"./ToolbarRootContext-C3gCOQD7.js";import"./getDisabledMountTransitionStyles-D-1ZYwTn.js";import"./getPseudoElementBounds-BdV0GJWh.js";import"./chevron-down-CRcrwjTm.js";import"./index-DPfBrSuZ.js";import"./error-D3fDFL5e.js";import"./BaseCbacBanner-CBDVw-BP.js";import"./makeExternalStore-4Ndi4CXn.js";import"./Tooltip-M05NfHCp.js";import"./PopoverPopup-DgBZbaSS.js";import"./debounce-1fRjCSLx.js";import"./useOsdkClient-BERGKa3D.js";import"./tick-uSlpKgY-.js";import"./DropdownField-C9Cbl0hv.js";import"./isEqual-Dhn6_kDg.js";import"./withOsdkMetrics-XWnXG2iZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
