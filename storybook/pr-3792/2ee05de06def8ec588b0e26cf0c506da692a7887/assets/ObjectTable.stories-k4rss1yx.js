import{j as i}from"./iframe-NH2TPfrt.js";import{O as p}from"./object-table-BK__0nSS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CNQ8-0CO.js";import"./preload-helper-DnfD210b.js";import"./Table-CuUO-8wd.js";import"./index-Dq4weQoF.js";import"./Dialog-BJy3217O.js";import"./cross-24tcUSkS.js";import"./svgIconContainer-BUKRs426.js";import"./useBaseUiId-4nRGSpr1.js";import"./InternalBackdrop-CyExLgCb.js";import"./composite-C2uwlMq3.js";import"./index-UEOUqQcW.js";import"./index-Cj-ZNFWv.js";import"./index-DK-HFNdc.js";import"./useEventCallback-BAyGh-mM.js";import"./SkeletonBar-D5-VroV9.js";import"./LoadingCell-Cd_w0Tes.js";import"./ColumnConfigDialog-DQUyct1S.js";import"./DraggableList-Bf5ssxLW.js";import"./search-3tww_Y-8.js";import"./Input-A00tbVb5.js";import"./useControlled-BF8AHFxI.js";import"./isEqual-0xRPSbep.js";import"./isObject-sRh_S4J1.js";import"./Button-BHf--f-c.js";import"./ActionButton-CaZsvwmy.js";import"./Checkbox-BsgnUcK_.js";import"./useValueChanged-Bu7iX5lg.js";import"./CollapsiblePanel-B45AwlAl.js";import"./MultiColumnSortDialog-NEhtrgyd.js";import"./MenuTrigger-1I8zp5W3.js";import"./CompositeItem-CVj27Z6H.js";import"./ToolbarRootContext-Pl3qLOs4.js";import"./getDisabledMountTransitionStyles-DxJl6O0G.js";import"./getPseudoElementBounds-gWx4w7cR.js";import"./chevron-down-BOaz_Rvj.js";import"./index-Ciy6Wj_i.js";import"./error-B94IGPmw.js";import"./BaseCbacBanner-BxJG3-8s.js";import"./makeExternalStore-CwBhR2PL.js";import"./Tooltip-DOM36q_X.js";import"./PopoverPopup-CONheFa9.js";import"./toNumber-Bw3pxWk0.js";import"./useOsdkClient-CH4mFKyg.js";import"./tick-Dzh3Ithd.js";import"./DropdownField-DEpsAiDX.js";import"./withOsdkMetrics-DL-MS1V5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
