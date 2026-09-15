import{j as i}from"./iframe-5SoalxB8.js";import{O as p}from"./object-table-DcytYsBJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dq4unFV0.js";import"./preload-helper-B3AWIfbd.js";import"./Table-BhIfm7wU.js";import"./index-Cez1kwXk.js";import"./Dialog-Bdx_IH1I.js";import"./cross-C6M2F8_v.js";import"./svgIconContainer-ZIKM4LC1.js";import"./useBaseUiId-_hIxwWiU.js";import"./InternalBackdrop-BNnaRKAX.js";import"./composite-SE2iQFWF.js";import"./index-DT5Sidop.js";import"./index-OzD1TZjX.js";import"./index-DWklm5Nh.js";import"./useEventCallback-CoMxb96Z.js";import"./SkeletonBar-UdUH3l3g.js";import"./LoadingCell-Dy3t5IHW.js";import"./ColumnConfigDialog-CJ_Qxc9o.js";import"./DraggableList-D9zI9O9E.js";import"./search-7jKLWuvF.js";import"./Input-B7jz047V.js";import"./useControlled-WPjc1su4.js";import"./Button-C7yTVROs.js";import"./small-cross-BXQIwf9i.js";import"./ActionButton-vMTpem8c.js";import"./Checkbox-BxPwSiXj.js";import"./useValueChanged-BRgu9RH8.js";import"./CollapsiblePanel-BPbFINDF.js";import"./MultiColumnSortDialog-DG0uFl9D.js";import"./MenuTrigger-BhHI-4MQ.js";import"./CompositeItem-vz-X2T1a.js";import"./ToolbarRootContext-BawR_l4w.js";import"./getDisabledMountTransitionStyles-iftAt274.js";import"./getPseudoElementBounds-DeJjQFQA.js";import"./chevron-down-C4Jmkz2d.js";import"./index-DlMkNRxq.js";import"./error-_mgoiawP.js";import"./BaseCbacBanner-BMmA5ke7.js";import"./makeExternalStore-DfAT07Vb.js";import"./Tooltip-DyjzpvsB.js";import"./PopoverPopup-CZVBhwLf.js";import"./debounce-Cow5gaxU.js";import"./useOsdkClient-Ct6jxELr.js";import"./tick-b6pDkRL9.js";import"./DropdownField-B9xNR_1-.js";import"./isEqual-BBKpWkCo.js";import"./withOsdkMetrics-BjqDzNow.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
