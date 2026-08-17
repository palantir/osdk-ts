import{j as i}from"./iframe-DxXKdltG.js";import{O as p}from"./object-table-Bj4-DbWM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cx9I6s9C.js";import"./preload-helper-DeiUyftX.js";import"./Table-BCRzEpGp.js";import"./index-BtfwOrEP.js";import"./Dialog-CDoh5PA7.js";import"./cross-BuyZb8_W.js";import"./svgIconContainer-cbdygDVB.js";import"./useBaseUiId-BIU3X4c6.js";import"./InternalBackdrop-CWJDzul9.js";import"./composite-thvm4Qx2.js";import"./index-Zxk0DmkR.js";import"./index-cP62887E.js";import"./index-oU8fVFfk.js";import"./useEventCallback-CHffR8EK.js";import"./SkeletonBar-120LEEzJ.js";import"./LoadingCell-BpiL5yLu.js";import"./ColumnConfigDialog-DtWOobBZ.js";import"./DraggableList-CHRK6gSE.js";import"./search-BGr984X9.js";import"./Input-B2m11alO.js";import"./useControlled-CaTiOTAf.js";import"./Button-DmXHdCRF.js";import"./small-cross-B7cAW_f_.js";import"./ActionButton-BxZEyn-_.js";import"./Checkbox-DA9O83FT.js";import"./useValueChanged-aU9wdss0.js";import"./CollapsiblePanel-DE-53r5b.js";import"./MultiColumnSortDialog-CHEYUa-f.js";import"./MenuTrigger-RBwYXjaK.js";import"./CompositeItem-Co5br9Tc.js";import"./ToolbarRootContext-Oju08BfH.js";import"./getDisabledMountTransitionStyles-kwkiwBEE.js";import"./getPseudoElementBounds-BTSwOJ5D.js";import"./chevron-down-vwGCQFp5.js";import"./index-QYya9p5M.js";import"./error-JxDwIdvE.js";import"./BaseCbacBanner--K3_UuZs.js";import"./makeExternalStore-B1C7zDDl.js";import"./Tooltip-BS-tcXN-.js";import"./PopoverPopup-DDqVXp1Q.js";import"./debounce-C0urt5pH.js";import"./useOsdkClient-DQ_KPrvO.js";import"./tick-BRyYqbgU.js";import"./DropdownField-ClA4NquN.js";import"./isEqual-DrAT4LG7.js";import"./withOsdkMetrics-B-_hpiKp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
