import{j as i}from"./iframe-B0W1tjyx.js";import{O as p}from"./object-table-ByW0iRN4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D456bz0k.js";import"./preload-helper-9BNFzYVn.js";import"./Table-CDqAze49.js";import"./index-B0ZI_T4A.js";import"./Dialog-1Hc8hvmW.js";import"./cross-Bvf_hoCy.js";import"./svgIconContainer-JVsHGGQJ.js";import"./useBaseUiId-Dg0EtU88.js";import"./InternalBackdrop-pkhhExjC.js";import"./composite-BvCgECMb.js";import"./index-0JUS0bl9.js";import"./index-D_b8RHzl.js";import"./index-9KlYwXLT.js";import"./useEventCallback-D2l6XFwH.js";import"./SkeletonBar-SdaBCFfG.js";import"./LoadingCell-Cyl597ns.js";import"./ColumnConfigDialog-CEm1F5GG.js";import"./DraggableList-BIlxskkh.js";import"./search-BdvsCHgj.js";import"./Input-CJ9Yoyko.js";import"./useControlled-CFQJO6Op.js";import"./isEqual-kHHHMxlJ.js";import"./isObject-CEG66Ysn.js";import"./Button-CllyD5Fk.js";import"./ActionButton-FCYoe6pd.js";import"./Checkbox-ClP_IzO-.js";import"./useValueChanged-B7WAZ2Po.js";import"./CollapsiblePanel-C1SH974_.js";import"./MultiColumnSortDialog-BUH-mu_E.js";import"./MenuTrigger-DidihynY.js";import"./CompositeItem-B3C1me1o.js";import"./ToolbarRootContext-D6BYbpCQ.js";import"./getDisabledMountTransitionStyles-ClGEvYNq.js";import"./getPseudoElementBounds-S5ZjmQl8.js";import"./chevron-down-BO0Ma7WA.js";import"./index-B26rJ8sm.js";import"./error-hxPE7cUz.js";import"./BaseCbacBanner-BT_ehWB_.js";import"./makeExternalStore-s1PuIN2e.js";import"./Tooltip-ft-HOAV-.js";import"./PopoverPopup-DZUhAEPi.js";import"./toNumber-CjgDMmjI.js";import"./useOsdkClient-BzN2he8l.js";import"./tick-BHbmMwuf.js";import"./DropdownField-D86cVelw.js";import"./withOsdkMetrics-Dl2A3XwS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
