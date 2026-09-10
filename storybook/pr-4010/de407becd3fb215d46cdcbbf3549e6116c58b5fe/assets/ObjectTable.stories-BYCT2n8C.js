import{j as i}from"./iframe-BlpejkzI.js";import{O as p}from"./object-table-ChJ31fZG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DLfaNZqh.js";import"./preload-helper-BA1cUfXb.js";import"./Table-PgtqjWX6.js";import"./index-CpPkHQnY.js";import"./Dialog-Doi--yEE.js";import"./cross-DiWsYg3r.js";import"./svgIconContainer-aKnF_69u.js";import"./useBaseUiId-BUVwvBQZ.js";import"./InternalBackdrop-DKB_eEnM.js";import"./composite-CdbN3ck3.js";import"./index-BdLU453s.js";import"./index-DVMy9f1T.js";import"./index-DOZcBLPY.js";import"./useEventCallback-BDK4Z8u2.js";import"./SkeletonBar-XgXRifQ0.js";import"./LoadingCell-BYMft5lE.js";import"./ColumnConfigDialog-mvsnwW1S.js";import"./DraggableList-v9pQbaC3.js";import"./search-IpDNvhGA.js";import"./Input-eoJV0GlP.js";import"./useControlled-CKCXNsan.js";import"./Button-DfGArVBU.js";import"./small-cross-CbD0uJgb.js";import"./ActionButton-mHtuKYOM.js";import"./Checkbox-DBxKcnus.js";import"./useValueChanged-CD7wCe1x.js";import"./CollapsiblePanel-Bxo4k_hM.js";import"./MultiColumnSortDialog-C5OH7rob.js";import"./MenuTrigger-DFA0EQYQ.js";import"./CompositeItem-D29vF932.js";import"./ToolbarRootContext-CBW-R_pU.js";import"./getDisabledMountTransitionStyles-Bq97lFh4.js";import"./getPseudoElementBounds-CclledTt.js";import"./chevron-down-DDoBjNkd.js";import"./index-CKx3u1TT.js";import"./error-CNoirV31.js";import"./BaseCbacBanner-BvjBpfm0.js";import"./makeExternalStore-CmmUlmnz.js";import"./Tooltip-B1OUttcu.js";import"./PopoverPopup-Bm6cnNyX.js";import"./debounce-7JU4VUDc.js";import"./useOsdkClient-CkQ9QpN3.js";import"./tick-_qvOZWIW.js";import"./DropdownField-BsA-cNSp.js";import"./isEqual-BKVrBEvt.js";import"./withOsdkMetrics-CHL30NBG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
