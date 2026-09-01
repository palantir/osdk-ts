import{j as i}from"./iframe-CXrz77U6.js";import{O as p}from"./object-table-DPD_mU3I.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXcbB_mX.js";import"./preload-helper-CKbgkQtS.js";import"./Table-CB5UJxLD.js";import"./index-X106RkLU.js";import"./Dialog-Zioc4Ynx.js";import"./cross-C0HgBeNT.js";import"./svgIconContainer-C1hoWfOl.js";import"./useBaseUiId-DEWnkFns.js";import"./InternalBackdrop-Dvnlt0Xs.js";import"./composite-ggnTBoJz.js";import"./index-CR04-v9m.js";import"./index-OCshk7-x.js";import"./index-DK9FtqpR.js";import"./useEventCallback-Cx73pa4B.js";import"./SkeletonBar-vVgaks7f.js";import"./LoadingCell-1PcNBJ1K.js";import"./ColumnConfigDialog-D3VP_nkk.js";import"./DraggableList-Bq0K0Mzh.js";import"./search-x_EEQ8qK.js";import"./Input-BytGuL1G.js";import"./useControlled-TnVqlNU3.js";import"./Button-p_Ia-Jx9.js";import"./small-cross-BQ-QsIs6.js";import"./ActionButton-1FqISt18.js";import"./Checkbox-BphtvbA1.js";import"./useValueChanged-BJhA6HMo.js";import"./CollapsiblePanel-DoujH5kJ.js";import"./MultiColumnSortDialog-CWk2ds_5.js";import"./MenuTrigger-Cye0wvZ3.js";import"./CompositeItem-CriE69S9.js";import"./ToolbarRootContext-ly2czwm4.js";import"./getDisabledMountTransitionStyles-C9lNrf-I.js";import"./getPseudoElementBounds-BF8pv6bh.js";import"./chevron-down-CJJaofKQ.js";import"./index-CIyfLN4v.js";import"./error-CjxcPcQH.js";import"./BaseCbacBanner-DITYJcfv.js";import"./makeExternalStore-odtlqelb.js";import"./Tooltip-B6A970Dl.js";import"./PopoverPopup-DBp_YwzX.js";import"./debounce-BnootL-T.js";import"./useOsdkClient-Dzvd5JFF.js";import"./tick-jaAesBj2.js";import"./DropdownField-CipAhaef.js";import"./isEqual-lu6Kov14.js";import"./withOsdkMetrics-gTbfWxlK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
