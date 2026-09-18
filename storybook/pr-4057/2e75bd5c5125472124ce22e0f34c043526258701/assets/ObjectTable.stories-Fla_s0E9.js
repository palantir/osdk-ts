import{j as i}from"./iframe-Csm-gXDM.js";import{O as p}from"./object-table-qsvVYomC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D3mCdSen.js";import"./preload-helper-B2pQoQF5.js";import"./Table-HXI6QEIq.js";import"./index-DSOkxNmo.js";import"./Dialog-CckVRK8t.js";import"./cross-D5yi1h_k.js";import"./svgIconContainer-D8CdVdTF.js";import"./useBaseUiId-BvtcsR9k.js";import"./InternalBackdrop-PYXL4FuF.js";import"./composite-Cd3ThWKg.js";import"./index-D8ourLLB.js";import"./index-DK8dF11E.js";import"./index-Bz_Scb7W.js";import"./useEventCallback-C21WKomU.js";import"./SkeletonBar-ExHoWVim.js";import"./LoadingCell-BCEMfVaW.js";import"./ColumnConfigDialog-C39UVoTn.js";import"./DraggableList-Ccj7NtyF.js";import"./search-BWu2Apub.js";import"./Input-CmyNmn-U.js";import"./useControlled-DlN8ExsH.js";import"./Button-D7cNt94b.js";import"./small-cross-TUSxa0rW.js";import"./ActionButton-D_Y5O8mn.js";import"./Checkbox-a5A6rPqQ.js";import"./useValueChanged-ARdcJoaj.js";import"./CollapsiblePanel-BL19iTTX.js";import"./MultiColumnSortDialog-B-vdD6yG.js";import"./MenuTrigger-B6OZlMQ0.js";import"./CompositeItem-BGdHymE8.js";import"./ToolbarRootContext-6VqAIkkQ.js";import"./getDisabledMountTransitionStyles-f3cbN-9y.js";import"./getPseudoElementBounds-DF7dHhi1.js";import"./chevron-down-K33gEoQm.js";import"./index-VPVf3Zil.js";import"./error-ptWpun4u.js";import"./BaseCbacBanner-CVh7jwjd.js";import"./makeExternalStore-DYZ91XmC.js";import"./Tooltip-CYtmaZF0.js";import"./PopoverPopup-CN55iEhH.js";import"./debounce-BWlbUKap.js";import"./useOsdkClient-D66R8lyo.js";import"./tick-D0oIP5GF.js";import"./DropdownField-C6s4GoHW.js";import"./isEqual-Cc-7thO7.js";import"./withOsdkMetrics-BGSXyq-B.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
