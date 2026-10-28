import{j as i}from"./iframe-DWrTLUp6.js";import{O as p}from"./object-table-DGdX9mh7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9h0YFgk.js";import"./preload-helper-G5GldQrR.js";import"./Table-IjxdH2zn.js";import"./index-tEnhVYEp.js";import"./Dialog-CjltaoNi.js";import"./cross-rPpE888H.js";import"./svgIconContainer-BsgOYiaE.js";import"./useBaseUiId-X8UvLlac.js";import"./InternalBackdrop-CyXd8Wg7.js";import"./composite-CZ2VobqK.js";import"./index-m17_hvWN.js";import"./index-DtPEGSb3.js";import"./index-B_mSXvUP.js";import"./useEventCallback-DDhfB_BM.js";import"./SkeletonBar-BIwjOvZv.js";import"./LoadingCell-Bn-kLl6N.js";import"./ColumnConfigDialog-YlA6oMxt.js";import"./DraggableList-DVYU7G2N.js";import"./search-Cj067yfV.js";import"./Input-Dd76dU6P.js";import"./useControlled-BL4uBJXc.js";import"./Button-kvP0U3yl.js";import"./small-cross-B8JdY_sl.js";import"./ActionButton-Ce4LrRpa.js";import"./Checkbox-Cl9gpo5R.js";import"./useValueChanged-DT_nuOVZ.js";import"./CollapsiblePanel-B0Fh3EI1.js";import"./MultiColumnSortDialog-HVKSzssd.js";import"./MenuTrigger-KWYSGIaD.js";import"./CompositeItem-BpSxYl_N.js";import"./ToolbarRootContext-Bh1zwv5x.js";import"./getDisabledMountTransitionStyles-CGESU4zi.js";import"./getPseudoElementBounds-CjM3OLtE.js";import"./chevron-down-BdqS2CCw.js";import"./index-C7nt3-Ul.js";import"./error-mT38HeTS.js";import"./BaseCbacBanner-BgX_EjQ-.js";import"./makeExternalStore-BVTsUjUO.js";import"./Tooltip-sCGgggo5.js";import"./PopoverPopup-CSl22ryn.js";import"./debounce-Bw-UdsSq.js";import"./useOsdkClient-DR78McuN.js";import"./tick-C8bPj3R_.js";import"./DropdownField-CQ3rIRKm.js";import"./isEqual-DIHVKk1K.js";import"./withOsdkMetrics-DjJmHGOy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
