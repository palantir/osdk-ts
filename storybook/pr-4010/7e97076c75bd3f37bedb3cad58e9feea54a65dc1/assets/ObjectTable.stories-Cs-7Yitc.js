import{j as i}from"./iframe-DieBzf9y.js";import{O as p}from"./object-table-CzgcEj7q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BuU5lr2U.js";import"./preload-helper-nfOhyenq.js";import"./Table-mgmK28yq.js";import"./index-CueLTBHP.js";import"./Dialog-CucEWtTN.js";import"./cross-t6O5j7uz.js";import"./svgIconContainer-C4rlmgrB.js";import"./useBaseUiId-Bxe_lFSq.js";import"./InternalBackdrop-BaJX2BYz.js";import"./composite-BvpzVpYi.js";import"./index-BSQeylJ3.js";import"./index-QupaIjGx.js";import"./index-aUc9Sjup.js";import"./useEventCallback-jKF40GPJ.js";import"./SkeletonBar-Bkw74uaU.js";import"./LoadingCell-Bn1mln2z.js";import"./ColumnConfigDialog-BfTmuxU1.js";import"./DraggableList-BrHzCLgw.js";import"./search-LxBHfv5l.js";import"./Input-Ckaolz8l.js";import"./useControlled-D4dAPTSV.js";import"./Button-C1caW-IN.js";import"./small-cross-jMIhgwaN.js";import"./ActionButton-CYr-60__.js";import"./Checkbox-U1Coys9e.js";import"./useValueChanged-DqTy5Eu1.js";import"./CollapsiblePanel-LFl_eO9r.js";import"./MultiColumnSortDialog-DpV27w9t.js";import"./MenuTrigger-s30URI7X.js";import"./CompositeItem-Bk12yzpP.js";import"./ToolbarRootContext-SW8tVZST.js";import"./getDisabledMountTransitionStyles-DXokCC_W.js";import"./getPseudoElementBounds-D6AwDuKV.js";import"./chevron-down-MpT91KZy.js";import"./index-BvOU7Oie.js";import"./error-BL3TgcOC.js";import"./BaseCbacBanner-D2rM26K6.js";import"./makeExternalStore-Bmuig1mM.js";import"./Tooltip-aV81X3rV.js";import"./PopoverPopup-BZdc9gni.js";import"./debounce-C1gLi99b.js";import"./useOsdkClient-DA_4AswE.js";import"./tick-DDUBOGMn.js";import"./DropdownField-B2xBQaH4.js";import"./isEqual-DMfYGbcT.js";import"./withOsdkMetrics-LkUW4C5C.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
