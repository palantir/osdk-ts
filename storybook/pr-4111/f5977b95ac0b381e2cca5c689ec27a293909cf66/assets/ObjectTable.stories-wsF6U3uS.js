import{j as i}from"./iframe-CSmstThV.js";import{O as p}from"./object-table-Br5TS_Ko.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ds851nQn.js";import"./preload-helper-CQQlEffD.js";import"./Table-D2RInRqE.js";import"./index-L8cshBl8.js";import"./Dialog-DRQMKMRV.js";import"./cross-D9KoCzL1.js";import"./svgIconContainer-BHO01tKx.js";import"./useBaseUiId-BiI5AoOG.js";import"./InternalBackdrop-Dbs4xP0U.js";import"./composite-D-st0uki.js";import"./index-CZXhyyfI.js";import"./index-DfIv01yj.js";import"./index-6VBvVHdU.js";import"./useEventCallback-FJVX4Oe4.js";import"./SkeletonBar-CD6igyAS.js";import"./LoadingCell-CVep6Ll3.js";import"./ColumnConfigDialog-C0CZWTf4.js";import"./DraggableList-BWKTYHTL.js";import"./search-DOAaZcfu.js";import"./Input-1EXkKDbs.js";import"./useControlled-CNZAIfTk.js";import"./Button-DI_WLWpV.js";import"./small-cross-CBcN5a2q.js";import"./ActionButton-CsW1cROw.js";import"./Checkbox-DfGU3i8U.js";import"./useValueChanged-B7kTE-jt.js";import"./CollapsiblePanel-pP6ofbVg.js";import"./MultiColumnSortDialog-DQSc23iF.js";import"./MenuTrigger-B3kyZj42.js";import"./CompositeItem-BaYmn_Wk.js";import"./ToolbarRootContext-D3qIfWMT.js";import"./getDisabledMountTransitionStyles-BRgSEEls.js";import"./getPseudoElementBounds-fscGHaQm.js";import"./chevron-down-Dn4WYVvB.js";import"./index-CQ6HYfiM.js";import"./error-Cu8ttO5d.js";import"./BaseCbacBanner-DmGWRWmI.js";import"./makeExternalStore-DWrbiT-Y.js";import"./Tooltip-B7jbz24u.js";import"./PopoverPopup-X1QJW8UM.js";import"./debounce-aX7sjs20.js";import"./useOsdkClient-XXkLSmqd.js";import"./tick-BFPZziq8.js";import"./DropdownField-CcJaOmXn.js";import"./isEqual-DqEmxDwB.js";import"./withOsdkMetrics-V02XcVkv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
