import{j as i}from"./iframe-DrKqnq_q.js";import{O as p}from"./object-table-Bbr7gxWR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7Q2pIiWX.js";import"./preload-helper-qHDf4bMQ.js";import"./Table-Bvm4eDXb.js";import"./index-oqhI0w-j.js";import"./Dialog-Cv3pb4do.js";import"./cross-BpfGUZC-.js";import"./svgIconContainer-2L2lvnX_.js";import"./useBaseUiId-BUFR3R_E.js";import"./InternalBackdrop-D8DYQnLb.js";import"./composite-T0CUtM4R.js";import"./index-3em6fiz2.js";import"./index-DUKrIkwM.js";import"./index-Bhqm6Xwr.js";import"./useEventCallback-VcvUG8kv.js";import"./SkeletonBar-BOE9V_sT.js";import"./LoadingCell-CkW06zTq.js";import"./ColumnConfigDialog-BppvF4xo.js";import"./DraggableList-CEOtdXhw.js";import"./search-BpFzV3Uw.js";import"./Input-C3Gx_MN3.js";import"./useControlled-CzpQezbz.js";import"./isEqual-Dgb9H6ef.js";import"./isObject-CP825mKv.js";import"./Button-CxnSYTOO.js";import"./ActionButton-B48LzOD2.js";import"./Checkbox-CSw-kctn.js";import"./useValueChanged-DWsQYSJN.js";import"./CollapsiblePanel-DFSRW_5T.js";import"./MultiColumnSortDialog-BNe5q3gF.js";import"./MenuTrigger-1bEqtenk.js";import"./CompositeItem-D1W5a8R6.js";import"./ToolbarRootContext-CVGyCRId.js";import"./getDisabledMountTransitionStyles-C5iaED36.js";import"./getPseudoElementBounds-CHI2pP8V.js";import"./chevron-down-BpeVjwjl.js";import"./index-BP4U2YmN.js";import"./error-ByTGymY6.js";import"./BaseCbacBanner-BuK2t43v.js";import"./makeExternalStore-BwpiJv42.js";import"./Tooltip-CWD8QRyp.js";import"./PopoverPopup-tH08bNf5.js";import"./toNumber-D9cLtQUL.js";import"./useOsdkClient-3odUhMKY.js";import"./tick-DNZ7pV74.js";import"./DropdownField-D3eXa2F6.js";import"./withOsdkMetrics-CCERPSNj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
