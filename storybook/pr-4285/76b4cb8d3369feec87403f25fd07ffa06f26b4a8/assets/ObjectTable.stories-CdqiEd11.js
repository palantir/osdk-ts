import{j as i}from"./iframe-CZB8iCrN.js";import{O as p}from"./object-table-DehqEVQ8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Be-gcaIa.js";import"./preload-helper-Bfp8b3lb.js";import"./Table-rjbMHeM4.js";import"./index-B20F_8Db.js";import"./Dialog-DLx2nLTg.js";import"./cross-BaVj46vf.js";import"./svgIconContainer-C34Xeufa.js";import"./useBaseUiId-Dl-CxI70.js";import"./InternalBackdrop-CZc7gtvF.js";import"./composite-7sRBgyZt.js";import"./index-DadbORQH.js";import"./index-DiIHqUbm.js";import"./index-BA1zjzC9.js";import"./useEventCallback-BfsfIFjp.js";import"./SkeletonBar-BSHJjhv4.js";import"./LoadingCell-BtskXgKq.js";import"./ColumnConfigDialog-6OPnpbeC.js";import"./DraggableList-DpDcjxuL.js";import"./search-FLqm4c0t.js";import"./Input-mSuQxNwT.js";import"./useControlled-CISHEyOE.js";import"./Button-CN7eBVL6.js";import"./small-cross-CHUBqXu0.js";import"./ActionButton-D-kvs5NB.js";import"./Checkbox-DqqtCebH.js";import"./useValueChanged-BCYX16oW.js";import"./CollapsiblePanel-DKs8Sotj.js";import"./MultiColumnSortDialog-fBXaklYM.js";import"./MenuTrigger-D7qtEAHL.js";import"./CompositeItem-BGy1WNiQ.js";import"./ToolbarRootContext-Xc9NkH4h.js";import"./getDisabledMountTransitionStyles-C0YnDowy.js";import"./getPseudoElementBounds-zdwXg5BV.js";import"./chevron-down-CyERpmZf.js";import"./index-CnvQ1zd9.js";import"./error-BrUtxvkn.js";import"./BaseCbacBanner-BgYcC6c9.js";import"./makeExternalStore-Bemx5W1x.js";import"./Tooltip-Dza2UVUK.js";import"./PopoverPopup-DlycPGOu.js";import"./debounce-5SpNsm5N.js";import"./useOsdkClient-BcxP6QNS.js";import"./tick-DJ7lwI6u.js";import"./DropdownField-Bru52TRy.js";import"./isEqual-BMF7Qr-y.js";import"./withOsdkMetrics-CrKh0O5J.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
