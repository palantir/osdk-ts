import{j as i}from"./iframe-CYWKmKsr.js";import{O as p}from"./object-table-CYu743XN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BYXU-Mgb.js";import"./preload-helper-CZxqSgr4.js";import"./Table-B7FNh3h6.js";import"./index-BjhNRAAe.js";import"./Dialog-C0XHXV-E.js";import"./cross-DwHZ8wsx.js";import"./svgIconContainer-uvoYHEep.js";import"./useBaseUiId-CUYHUXgP.js";import"./InternalBackdrop-o-O31_oB.js";import"./composite-BLYmi_ZT.js";import"./index-BIzhtmMD.js";import"./index-CV_T3ZWx.js";import"./index-E5eoVw6A.js";import"./useEventCallback-CEYn9Z7G.js";import"./SkeletonBar-BmvrkymP.js";import"./LoadingCell-Dhlo7QCt.js";import"./ColumnConfigDialog-vj0c16i5.js";import"./DraggableList-DgsnRl74.js";import"./search-DEjEejFg.js";import"./Input-DhtTH-yg.js";import"./useControlled-Cmfvaful.js";import"./Button-Dsxz3sQ9.js";import"./small-cross-Bq0Rd3mQ.js";import"./ActionButton-D6ugCtzY.js";import"./Checkbox-BJCnezq_.js";import"./useValueChanged-CyYxoKaI.js";import"./CollapsiblePanel-CNqItG4o.js";import"./MultiColumnSortDialog-DkqN_a2d.js";import"./MenuTrigger-CJ_KappX.js";import"./CompositeItem-DES--d3v.js";import"./ToolbarRootContext-D-OgFfxn.js";import"./getDisabledMountTransitionStyles-jsr2iyKL.js";import"./getPseudoElementBounds-CdbUSWec.js";import"./chevron-down-CS2_34kJ.js";import"./index-BAMyMGOv.js";import"./error-D0LuxI0-.js";import"./BaseCbacBanner-B2BRkW3t.js";import"./makeExternalStore-BcIe4sBs.js";import"./Tooltip-d1W559-2.js";import"./isObject-BtxB2d-s.js";import"./debounce-FzhUUz5q.js";import"./useOsdkClient-KfXWcl-D.js";import"./tick-D7vMFMoW.js";import"./DropdownField-D7boWEU7.js";import"./isEqual-BMzS8efs.js";import"./_baseIsEqual-DJxltLfr.js";import"./withOsdkMetrics-C5qHzwaF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
