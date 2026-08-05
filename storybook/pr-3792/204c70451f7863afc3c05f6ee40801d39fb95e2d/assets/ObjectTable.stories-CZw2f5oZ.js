import{j as i}from"./iframe-BRmpzCZE.js";import{O as p}from"./object-table-B4KSVeZe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BFw-YHDs.js";import"./preload-helper-B5zwBkL_.js";import"./Table-DOE4ka-3.js";import"./index-DTo1AYJc.js";import"./Dialog-EXkgzOFJ.js";import"./cross-BrjpUCyw.js";import"./svgIconContainer-ClB0EAWF.js";import"./useBaseUiId-BWWrNU9X.js";import"./InternalBackdrop-BTcS2Uf7.js";import"./composite-BoPdrtMz.js";import"./index-CNCITnU0.js";import"./index-CuSmUnvX.js";import"./index-ypap7acm.js";import"./useEventCallback-C6Mswr5F.js";import"./SkeletonBar-DQU-rI3B.js";import"./LoadingCell-C1LUUzjB.js";import"./ColumnConfigDialog-xNqG-w0E.js";import"./DraggableList-DAZdpPIL.js";import"./search-QrPcr5Jb.js";import"./Input-DevgbnOf.js";import"./useControlled-0nxGMda2.js";import"./isEqual-DWFHPcMG.js";import"./isObject-89n0janb.js";import"./Button-D9yfxBKS.js";import"./ActionButton-B_mAo__X.js";import"./Checkbox-G_ri2pRu.js";import"./useValueChanged-HLDrTK4G.js";import"./CollapsiblePanel-BazzP6aN.js";import"./MultiColumnSortDialog-CG_tkOTM.js";import"./MenuTrigger-BLByaRZe.js";import"./CompositeItem-B9M_u-lg.js";import"./ToolbarRootContext-Czmaa9ZO.js";import"./getDisabledMountTransitionStyles-YpX2H8HK.js";import"./getPseudoElementBounds-56O41HH1.js";import"./chevron-down-9MEkRqsE.js";import"./index-DyDKdM2i.js";import"./error-Cbn_oEWX.js";import"./BaseCbacBanner-DLkybrgv.js";import"./makeExternalStore-CeZQOp3r.js";import"./Tooltip-epWC9lqd.js";import"./PopoverPopup-DjFxDqyY.js";import"./toNumber-DWulGXhk.js";import"./useOsdkClient-BZ8Rgv97.js";import"./tick-Cxqoq0Gn.js";import"./DropdownField-DpN0Y8uc.js";import"./withOsdkMetrics-CD_RD48C.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
