import{j as i}from"./iframe-CZN1N75z.js";import{O as p}from"./object-table-CtXjGvBC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D2mUwyG3.js";import"./preload-helper-Cw86qjs4.js";import"./Table-BZoID_Mp.js";import"./index-BRVA8pfy.js";import"./Dialog-Avwiaasg.js";import"./cross-BUPEAbju.js";import"./svgIconContainer-OYzxRDDu.js";import"./useBaseUiId-BhqTpn-A.js";import"./InternalBackdrop-Da2ga8Po.js";import"./composite-BOWBPj0r.js";import"./index-BL8DZWnZ.js";import"./index-rUijMERz.js";import"./index-CBRjBxvt.js";import"./useEventCallback-TYMlq9dq.js";import"./SkeletonBar-Dm2D-U7J.js";import"./LoadingCell-BUJ_xe-O.js";import"./ColumnConfigDialog-mDy05K6w.js";import"./DraggableList-zYyClb1p.js";import"./search-DpmtddYG.js";import"./Input-4HpsLPAr.js";import"./useControlled-Co7-DLRd.js";import"./isEqual-Bjk4nWrt.js";import"./isObject-CxdzCrBm.js";import"./Button-C8c4R169.js";import"./ActionButton-B7JmwFN6.js";import"./Checkbox-3wyYSXhv.js";import"./useValueChanged-BtVPxKIb.js";import"./CollapsiblePanel-BSkEcukT.js";import"./MultiColumnSortDialog-QG0Zo_sR.js";import"./MenuTrigger-43Mc5yck.js";import"./CompositeItem-DLFuEVrs.js";import"./ToolbarRootContext-IqzlHljh.js";import"./getDisabledMountTransitionStyles-BUM7Jrx3.js";import"./getPseudoElementBounds-76rXSUBd.js";import"./chevron-down-BBx72XFw.js";import"./index-C6DRiLu1.js";import"./error-Ohh9at4C.js";import"./BaseCbacBanner-f_5-7-41.js";import"./makeExternalStore-jXoxqI6f.js";import"./Tooltip-CN_hxpEt.js";import"./PopoverPopup-DYRdvUS7.js";import"./toNumber-CfU6rNfo.js";import"./useOsdkClient-Bw1dbXWl.js";import"./tick-D5Vwfd2_.js";import"./DropdownField-D2Wgd-Su.js";import"./withOsdkMetrics-C2NSp3nJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
