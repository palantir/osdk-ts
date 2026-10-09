import{j as i}from"./iframe-BPD7a-d3.js";import{O as p}from"./object-table-D-tCC7x0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DHUw_AlW.js";import"./preload-helper-BMJg2fth.js";import"./Table-X6gXC-rQ.js";import"./index-DWlOJTtZ.js";import"./Dialog-zxTOVbxW.js";import"./cross-BQBN2sBj.js";import"./svgIconContainer-9WeLc1W4.js";import"./useBaseUiId-B7NeBfTl.js";import"./InternalBackdrop-BqFiGGtG.js";import"./composite-2r4XaYyI.js";import"./index-BFdep0Pu.js";import"./index-CPwIgA5j.js";import"./index-Dc2JolBW.js";import"./useEventCallback-BLd4X65y.js";import"./SkeletonBar-DXu4hwWS.js";import"./LoadingCell-D1PldjSx.js";import"./ColumnConfigDialog-EzXdePxC.js";import"./DraggableList-Km3Db3w6.js";import"./search-DDY46Bsb.js";import"./Input-BsWtOrbL.js";import"./useControlled-DcoiTjSg.js";import"./Button-J8RQxXRy.js";import"./small-cross-DKMapFDw.js";import"./ActionButton-DQ15zJBD.js";import"./Checkbox-DKjVjgpk.js";import"./useValueChanged-CW-dzw8w.js";import"./CollapsiblePanel-DZA1hbiz.js";import"./MultiColumnSortDialog-DaToBdED.js";import"./MenuTrigger-C0rTEkZ4.js";import"./CompositeItem-CQbGZkro.js";import"./ToolbarRootContext-CvDFIQMo.js";import"./getDisabledMountTransitionStyles-GoNHsGRT.js";import"./getPseudoElementBounds-wmkfIGoM.js";import"./chevron-down-TG9TSSoU.js";import"./index-BUYfos0b.js";import"./error-DxTVaEkU.js";import"./BaseCbacBanner-CCV7S7vH.js";import"./makeExternalStore-BXsO-6Dt.js";import"./Tooltip-y6dqO2XM.js";import"./PopoverPopup-DLgHHGX6.js";import"./debounce-D2ZCRJTn.js";import"./useOsdkClient-jf6lJmqS.js";import"./tick-0nx9bnwa.js";import"./DropdownField-Dpdo-uvo.js";import"./isEqual-DKT0xxpO.js";import"./withOsdkMetrics-zev-jqP5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
