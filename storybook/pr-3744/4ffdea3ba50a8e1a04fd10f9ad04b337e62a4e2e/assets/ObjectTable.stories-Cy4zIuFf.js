import{j as i}from"./iframe-BAeLbAl6.js";import{O as p}from"./object-table-BnsFvJtA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-yhM5wv8X.js";import"./preload-helper-m_84o41e.js";import"./Table-CK4yTRyV.js";import"./index-PFCRcBB8.js";import"./Dialog-dItpOhns.js";import"./cross-LaD09s4o.js";import"./svgIconContainer-BwzsxKuu.js";import"./useBaseUiId-Bqj7O5fV.js";import"./InternalBackdrop-ks6tfBqL.js";import"./composite-CB1zzFRj.js";import"./index-C94QZByk.js";import"./index-Cewd33Zv.js";import"./index-Bxsk2OvM.js";import"./useEventCallback-DWjHyX_4.js";import"./SkeletonBar-CcamCJ4u.js";import"./LoadingCell-B3P3spJG.js";import"./ColumnConfigDialog-B5H1sWgC.js";import"./DraggableList-D3jEqs9W.js";import"./search-DSQXKmVC.js";import"./Input-v-g3V96U.js";import"./useControlled-ESFaGK0R.js";import"./isEqual-3WwyNO5B.js";import"./isObject-DuMSLyr1.js";import"./Button-DlDEnFnv.js";import"./ActionButton-DHS8Tw7g.js";import"./Checkbox-JYmrAvZy.js";import"./useValueChanged-BxkTgku3.js";import"./CollapsiblePanel-C0jKchik.js";import"./MultiColumnSortDialog-2mMkw3qI.js";import"./MenuTrigger-DE_ZRb6u.js";import"./CompositeItem-CWT-t3Tx.js";import"./ToolbarRootContext-Cd959Anj.js";import"./getDisabledMountTransitionStyles-fDJE5x_7.js";import"./getPseudoElementBounds-CW_MLhzy.js";import"./chevron-down-Xy6No0Yn.js";import"./index-CZsDhWOE.js";import"./error-BE-E_O08.js";import"./BaseCbacBanner-DqseBF8U.js";import"./makeExternalStore-DgNy_XDA.js";import"./Tooltip-DU3L3KsD.js";import"./PopoverPopup-BeJ0b8hw.js";import"./toNumber-CfjuIAcz.js";import"./useOsdkClient-BGONbmHM.js";import"./tick-POonDG8j.js";import"./DropdownField-Dq4vr_wR.js";import"./withOsdkMetrics-CMXM2A9g.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
