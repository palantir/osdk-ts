import{j as i}from"./iframe-DNO5nHhn.js";import{O as p}from"./object-table-CnuobtBz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CEZja-so.js";import"./preload-helper-DmJRiiyv.js";import"./Table-DaVBUNKS.js";import"./index-B1zYgGoG.js";import"./Dialog-COvaeWHa.js";import"./cross-DkGiXpSw.js";import"./svgIconContainer-CrvnRU9F.js";import"./useBaseUiId-VJjRPmeN.js";import"./InternalBackdrop-DLzfXrnQ.js";import"./composite-BaAus-sy.js";import"./index-DoyQeAs3.js";import"./index-GqFGt6-k.js";import"./index-Ce87FLOS.js";import"./useEventCallback-BOvCXpPp.js";import"./SkeletonBar-CPy14_Pl.js";import"./LoadingCell-DEQP3fso.js";import"./ColumnConfigDialog-Cp1GCMCd.js";import"./DraggableList-DN2DXunz.js";import"./search-D7RgJWVi.js";import"./Input-DLMSp_LN.js";import"./useControlled-DFdql7xi.js";import"./Button-RvpRTGgQ.js";import"./small-cross-BKeeryj7.js";import"./ActionButton-YeYo3Rcp.js";import"./Checkbox-D3YQCgVO.js";import"./useValueChanged-C9nCISHq.js";import"./CollapsiblePanel-BYOXGGhP.js";import"./MultiColumnSortDialog-C5fM365N.js";import"./MenuTrigger-Dfv55hnJ.js";import"./CompositeItem-50twUNd1.js";import"./ToolbarRootContext-XjIA09C4.js";import"./getDisabledMountTransitionStyles-CNFrfHKN.js";import"./getPseudoElementBounds-D5ABxTfB.js";import"./chevron-down-CoqE-c4D.js";import"./index-CXgAIFbB.js";import"./error-BkrZNArB.js";import"./BaseCbacBanner-U_SB8CX2.js";import"./makeExternalStore-BOcAXB1x.js";import"./Tooltip-DQGkuZz9.js";import"./isObject-CUrQ0YWF.js";import"./debounce-Sh9pMPZ4.js";import"./useOsdkClient-BWdcC--S.js";import"./tick-BGglWVfw.js";import"./DropdownField-9n3rWcYS.js";import"./isEqual-BpKTdG-g.js";import"./_baseIsEqual-CjPifIr_.js";import"./withOsdkMetrics-1wr3AqUj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
