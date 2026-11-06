import{j as i}from"./iframe-CDFbPseP.js";import{O as p}from"./object-table-DUOcSi8T.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dd2qZbeX.js";import"./preload-helper-BKjsnnFk.js";import"./Table-DMQnRqi0.js";import"./index-CzYE_gFj.js";import"./Dialog-Dv0_z0ly.js";import"./cross-D1CsBnZQ.js";import"./svgIconContainer-BNgOwI7J.js";import"./useBaseUiId-BT9BKuc8.js";import"./InternalBackdrop-Dlq9iOxD.js";import"./composite-DoGjJBYp.js";import"./index-zCdxyZBm.js";import"./index-B9ZyEEfj.js";import"./index-DHvlVsA3.js";import"./useEventCallback-BV_0VhHt.js";import"./SkeletonBar-APOybFL0.js";import"./LoadingCell-2H_eFQDc.js";import"./ColumnConfigDialog-Crbpzmli.js";import"./DraggableList-BeB_zh_T.js";import"./search-B_GZiPBG.js";import"./Input-RJbqaFIV.js";import"./useControlled-DSth82Ot.js";import"./Button-adqe8TBe.js";import"./small-cross-Dij3KccF.js";import"./ActionButton-0OmN--Ya.js";import"./Checkbox-BPjU0jTJ.js";import"./useValueChanged-BKwGtryl.js";import"./CollapsiblePanel-B_EKx4xS.js";import"./MultiColumnSortDialog-ld-Yv8ju.js";import"./MenuTrigger-CxKvqDeW.js";import"./CompositeItem-CBWcSsRg.js";import"./ToolbarRootContext-B4N7QEkj.js";import"./getDisabledMountTransitionStyles-C4CA8fPv.js";import"./getPseudoElementBounds-3mroWXjI.js";import"./chevron-down-LTvAL7jy.js";import"./index-sMIecie8.js";import"./error-B-c6YY8H.js";import"./BaseCbacBanner-DQXK5STs.js";import"./makeExternalStore-CffN4Zs6.js";import"./Tooltip-kSDQRB-X.js";import"./PopoverPopup-Dx_YvUJO.js";import"./debounce-CP1jiFBE.js";import"./useOsdkClient-DGrdJ83Z.js";import"./tick-dn_tR7od.js";import"./DropdownField-CSbOb56z.js";import"./isEqual-GJObA0dv.js";import"./withOsdkMetrics-C_TM08QX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
