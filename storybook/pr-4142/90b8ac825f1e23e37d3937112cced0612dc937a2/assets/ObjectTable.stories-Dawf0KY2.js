import{j as i}from"./iframe-iZnS8oEd.js";import{O as p}from"./object-table-C4Ty0IB9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BnX1y_qE.js";import"./preload-helper-Bp14nz6B.js";import"./Table-D9c2v_Jv.js";import"./index-DYpyIwVE.js";import"./Dialog-CcE2k6kD.js";import"./cross-CwJuB6vr.js";import"./svgIconContainer-CQ9YnN-K.js";import"./useBaseUiId-30R3WmkM.js";import"./InternalBackdrop-DkYxAsCO.js";import"./composite-DFXKizFH.js";import"./index-BGV0iA7n.js";import"./index-lcQmyE2o.js";import"./index-CF3zpfbh.js";import"./useEventCallback-BJQUbbjw.js";import"./SkeletonBar-B4WtYr-D.js";import"./LoadingCell-DcmBu7cA.js";import"./ColumnConfigDialog-DIJjz-s0.js";import"./DraggableList-DnKYpezS.js";import"./search-VBwZcVe4.js";import"./Input-DJavpeQK.js";import"./useControlled-D6M_jpuK.js";import"./Button-UwlMUZt9.js";import"./small-cross-LlyJGW73.js";import"./ActionButton-n6yDW2MN.js";import"./Checkbox-BbizxJnk.js";import"./useValueChanged-Dy1WlJh-.js";import"./CollapsiblePanel-DXxFmeha.js";import"./MultiColumnSortDialog-BBzzO1y2.js";import"./MenuTrigger-kFsG_HSQ.js";import"./CompositeItem-wRG5nrDT.js";import"./ToolbarRootContext-Da2ttLiC.js";import"./getDisabledMountTransitionStyles-qNwcN3KE.js";import"./getPseudoElementBounds-C9heIyNM.js";import"./chevron-down-BCGqeKWb.js";import"./index-CiXw8-sy.js";import"./error-D6yePDbl.js";import"./BaseCbacBanner-hbazI1Tu.js";import"./makeExternalStore-RezbOIS0.js";import"./Tooltip-DRVdX3dm.js";import"./PopoverPopup-CLC1eyIN.js";import"./debounce-C0yUuuvl.js";import"./useOsdkClient-EkE0pn24.js";import"./tick-HBQstKrv.js";import"./DropdownField-0N17NynR.js";import"./isEqual-_DoGzm8i.js";import"./withOsdkMetrics-B-D7eEQx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
