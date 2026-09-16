import{j as i}from"./iframe-nlmHRzbs.js";import{O as p}from"./object-table-DOQUbULy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BTB34smg.js";import"./preload-helper-Bb4XP1JR.js";import"./Table-Iflxq4LK.js";import"./index-BgU0BklA.js";import"./Dialog-B--HyOFO.js";import"./cross-BQ8TIcPZ.js";import"./svgIconContainer-DS8QHuIj.js";import"./useBaseUiId-BvXBgh7R.js";import"./InternalBackdrop-CEbVru8y.js";import"./composite-9JvUOFhV.js";import"./index-BBKiIpPq.js";import"./index-DrPWGN5f.js";import"./index-BvyZUx7D.js";import"./useEventCallback-DdbGqZSc.js";import"./SkeletonBar-CecNAbci.js";import"./LoadingCell-BR6nn8z5.js";import"./ColumnConfigDialog-CsSbs-RH.js";import"./DraggableList-CgQsJlL7.js";import"./search-KdHomzFH.js";import"./Input-C_WMBA0h.js";import"./useControlled-CL-2sXEB.js";import"./Button-u5u7l_L-.js";import"./small-cross-BOjbtokm.js";import"./ActionButton-DjrG6zzQ.js";import"./Checkbox-CNVwyFF7.js";import"./useValueChanged-Ct9fu7Wh.js";import"./CollapsiblePanel-CY5PmDvT.js";import"./MultiColumnSortDialog-C9_8osWy.js";import"./MenuTrigger-0I9U1fuS.js";import"./CompositeItem-DKy9HSNC.js";import"./ToolbarRootContext-C84AlWji.js";import"./getDisabledMountTransitionStyles-BPlx4jy3.js";import"./getPseudoElementBounds-CbqeOO0o.js";import"./chevron-down-DrD3cVw1.js";import"./index-B9KsoBHZ.js";import"./error-D0sD9myM.js";import"./BaseCbacBanner-rlX41YP5.js";import"./makeExternalStore-CDFtpytl.js";import"./Tooltip-h8u3LTdZ.js";import"./PopoverPopup-Cv6VjVH2.js";import"./debounce-tbCf9dd0.js";import"./useOsdkClient-upaDZFfa.js";import"./tick-jNCOjvIC.js";import"./DropdownField-CYPegbUm.js";import"./isEqual-CLpN-Ztb.js";import"./withOsdkMetrics-CYPNcnBx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
