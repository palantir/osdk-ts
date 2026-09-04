import{j as i}from"./iframe-CJ4psHOg.js";import{O as p}from"./object-table-GRMKk6hj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DaYXMpAd.js";import"./preload-helper-CnvWLU9s.js";import"./Table-cMA2hIFX.js";import"./index-C3yQNnbT.js";import"./Dialog-BqlzrAU9.js";import"./cross-Bare-byH.js";import"./svgIconContainer-BaNWfr18.js";import"./useBaseUiId-DyrOymcM.js";import"./InternalBackdrop-DqSa3KH2.js";import"./composite-BxTUVSqW.js";import"./index-B0t-MH7Z.js";import"./index-Cld24Chi.js";import"./index-BmDdDnIx.js";import"./useEventCallback-dIcMHu5I.js";import"./SkeletonBar-ClzesOCU.js";import"./LoadingCell-CRcYa4DL.js";import"./ColumnConfigDialog-Clp3O73i.js";import"./DraggableList-DvYKoDc9.js";import"./search-B2UifxoD.js";import"./Input-C8hdlhUf.js";import"./useControlled-FXpF1HMA.js";import"./Button-23ABSMgl.js";import"./small-cross-BUvQb5Jp.js";import"./ActionButton-I4J4bzq7.js";import"./Checkbox-E2qT6viP.js";import"./useValueChanged-Eg63Arfo.js";import"./CollapsiblePanel-BPqkIw8T.js";import"./MultiColumnSortDialog-DacSDA-_.js";import"./MenuTrigger-C2UBxzqP.js";import"./CompositeItem-CwkxMYBx.js";import"./ToolbarRootContext-C-4jRAr6.js";import"./getDisabledMountTransitionStyles-CGJlU2Jf.js";import"./getPseudoElementBounds-BQVnQvY_.js";import"./chevron-down-BegRN8q-.js";import"./index-d1HP_js7.js";import"./error-Bn4V0LpQ.js";import"./BaseCbacBanner-D0ajWtjX.js";import"./makeExternalStore-CZxqc8La.js";import"./Tooltip-X1bNRoko.js";import"./PopoverPopup-ZyXkzEeN.js";import"./debounce-DtKena2t.js";import"./useOsdkClient-Bs3HId-B.js";import"./tick-CaD1yuR8.js";import"./DropdownField-DJtngQjG.js";import"./isEqual-BUIEKy8Q.js";import"./withOsdkMetrics-DlR5OldO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
