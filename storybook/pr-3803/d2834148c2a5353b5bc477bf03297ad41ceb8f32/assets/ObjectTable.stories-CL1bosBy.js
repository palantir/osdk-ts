import{j as i}from"./iframe-DnZQIvTT.js";import{O as p}from"./object-table-DVRIN3fz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CuUYP85B.js";import"./preload-helper-BkW8a5rl.js";import"./Table-75SC6Pmm.js";import"./index-9hlHlyou.js";import"./Dialog-Cm-o7Xu1.js";import"./cross-C0DMMgZH.js";import"./svgIconContainer-yuQ64jxi.js";import"./useBaseUiId-BiQqFJiH.js";import"./InternalBackdrop-FmHXWr_y.js";import"./composite-B_yB_W3d.js";import"./index-Co5VwW1q.js";import"./index-CCOub406.js";import"./index-DSZ7IIaR.js";import"./useEventCallback-S3i3cwUJ.js";import"./SkeletonBar-DuBFX7MQ.js";import"./LoadingCell-Dz5yl_8o.js";import"./ColumnConfigDialog-CpFqQfx6.js";import"./DraggableList-CAHF7cXc.js";import"./search-DkG_mcgd.js";import"./Input-B-XWsA0h.js";import"./useControlled-lSDM3Zga.js";import"./isEqual-DxajWOoa.js";import"./isObject-DJ6ciwEQ.js";import"./Button-nmd_W8Kk.js";import"./ActionButton-Bpwm6fQH.js";import"./Checkbox-Dxxnmc4W.js";import"./useValueChanged-CkAf_GeI.js";import"./CollapsiblePanel-DI1vG4zM.js";import"./MultiColumnSortDialog-BOrrDHGi.js";import"./MenuTrigger-BYlkQB5e.js";import"./CompositeItem-5_WtziOg.js";import"./ToolbarRootContext-DeRNPR7X.js";import"./getDisabledMountTransitionStyles-PiiH0z4l.js";import"./getPseudoElementBounds-CAkRuCAN.js";import"./chevron-down-VeqrXGGR.js";import"./index-D6YwWFy-.js";import"./error-BLztiVY7.js";import"./BaseCbacBanner-DSJTxRm1.js";import"./makeExternalStore-CouSw7Ae.js";import"./Tooltip-kBgN66pM.js";import"./PopoverPopup-CwrAv6_7.js";import"./toNumber-Dom4meFx.js";import"./useOsdkClient-C6UovaqT.js";import"./tick-Cw1PsFg_.js";import"./DropdownField-DbDbsfOB.js";import"./withOsdkMetrics-fofNv3K2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
