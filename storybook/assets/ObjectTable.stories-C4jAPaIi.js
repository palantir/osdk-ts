import{j as i}from"./iframe-Cw9nAJHw.js";import{O as p}from"./object-table-BTJE2d_z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_WwjOqR.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cm4tfeS3.js";import"./index-C9NZ706V.js";import"./Dialog-D7WzKEzK.js";import"./cross-DC9OR73d.js";import"./svgIconContainer-BeQlV-NB.js";import"./useBaseUiId-BdmbP2Th.js";import"./InternalBackdrop-CK0wKi04.js";import"./composite-DfioEurU.js";import"./index-DL9w9at2.js";import"./index-B4WhUvaf.js";import"./index-CVJos0W2.js";import"./useEventCallback-DAxvqkXx.js";import"./SkeletonBar-0GgQkvb9.js";import"./LoadingCell-BHM0aeRj.js";import"./ColumnConfigDialog-vSSf2O5I.js";import"./DraggableList-Cx4s9dS9.js";import"./search-EiPBjO7o.js";import"./Input-BP-w5iIg.js";import"./useControlled-DpXUPY6h.js";import"./isEqual-Vn8OofP_.js";import"./isObject-CO7kU0cE.js";import"./Button-BXdkJeBS.js";import"./ActionButton-Bctr3vAg.js";import"./Checkbox-D4VPML9t.js";import"./useValueChanged-CgvW3tg7.js";import"./CollapsiblePanel-B-eCrTZT.js";import"./MultiColumnSortDialog-BkGsvrrm.js";import"./MenuTrigger-Bv_KdwkL.js";import"./CompositeItem-CFzVlRYW.js";import"./ToolbarRootContext-BhufIJhp.js";import"./getDisabledMountTransitionStyles-CHZVbsAp.js";import"./getPseudoElementBounds-DadvNQNH.js";import"./chevron-down-wb7CIeFV.js";import"./index-D7Y8Yzf2.js";import"./error-B4eMuMy9.js";import"./BaseCbacBanner-sHr4rcXe.js";import"./makeExternalStore-pQyd7T6K.js";import"./Tooltip-Bgma1C54.js";import"./PopoverPopup-CwYnHNuG.js";import"./toNumber-DFrCctYK.js";import"./useOsdkClient-Cw7OsHD5.js";import"./tick-CJVTH0Sl.js";import"./DropdownField-WnvUjuJL.js";import"./withOsdkMetrics-C4R0qJmr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
