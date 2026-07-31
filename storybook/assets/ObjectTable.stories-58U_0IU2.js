import{j as i}from"./iframe-CAO1B58s.js";import{O as p}from"./object-table-d1AklzUy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DyReEJaj.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CvS8FU7B.js";import"./index-2SlFnaHE.js";import"./Dialog-BajRShuR.js";import"./cross-CLetBbcm.js";import"./svgIconContainer-M6SpqrlV.js";import"./useBaseUiId-D72lMfE_.js";import"./InternalBackdrop-CN2XFVRe.js";import"./composite-B06T-Azs.js";import"./index-CqYJuNzQ.js";import"./index-Dl9K5k5W.js";import"./index-DrLb19NA.js";import"./useEventCallback-BFrvc70H.js";import"./SkeletonBar-CKhg_xIZ.js";import"./LoadingCell-DpSjA57A.js";import"./ColumnConfigDialog-CNHqTBO9.js";import"./DraggableList-A-6hxvt-.js";import"./search-CpelYZyf.js";import"./Input-Z-O5GJkg.js";import"./useControlled-CMPDUvCd.js";import"./isEqual-CDSyWO-H.js";import"./isObject-DOOOShJo.js";import"./Button-Cpz-DPHy.js";import"./ActionButton-Dfye5dM1.js";import"./Checkbox-CRaDM2h7.js";import"./useValueChanged-Dd6Og4rm.js";import"./CollapsiblePanel-DJmpv6Yu.js";import"./MultiColumnSortDialog-3zOqwGU5.js";import"./MenuTrigger-BK4Dc-_7.js";import"./CompositeItem-BgYEKQXO.js";import"./ToolbarRootContext-BcxrhZv1.js";import"./getDisabledMountTransitionStyles-CR2Dsb_b.js";import"./getPseudoElementBounds-DpI9xC91.js";import"./chevron-down-p1qYsJXr.js";import"./index-D62FQFIO.js";import"./error-DCZY56Y1.js";import"./BaseCbacBanner-CMVLBd9d.js";import"./makeExternalStore-whgFatuo.js";import"./Tooltip-gkbvOz_7.js";import"./PopoverPopup-BAcjiyS8.js";import"./toNumber-BDArJ5Eh.js";import"./useOsdkClient-Bcf-xOjI.js";import"./tick-C11u5Lux.js";import"./DropdownField-CcY15Q6R.js";import"./withOsdkMetrics-CCe5tkcF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
