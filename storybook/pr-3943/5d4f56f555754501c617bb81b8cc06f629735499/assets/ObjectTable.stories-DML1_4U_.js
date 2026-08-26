import{j as i}from"./iframe-C8eg2aVK.js";import{O as p}from"./object-table-qoW5Qq7z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DAKUgsqh.js";import"./preload-helper-C2CvTlen.js";import"./Table-Dv1QU8Gh.js";import"./index-DwPFzsZq.js";import"./Dialog-B2Rbvbrg.js";import"./cross-DP1qntav.js";import"./svgIconContainer-DyXK-o1P.js";import"./useBaseUiId-DXPA-GsQ.js";import"./InternalBackdrop-C9EG6YtE.js";import"./composite-CEgtyNx-.js";import"./index-C0Un304-.js";import"./index-ZVVJNOJS.js";import"./index-B8vZrbzE.js";import"./useEventCallback-CQ6nFGrm.js";import"./SkeletonBar-Cnk-BAJn.js";import"./LoadingCell-D_arR6jU.js";import"./ColumnConfigDialog-DkYfQF_p.js";import"./DraggableList-DpXEDyP4.js";import"./search-CbO7NZxO.js";import"./Input-C8xPJvAo.js";import"./useControlled-DVBJV2vy.js";import"./Button-CHkJdegF.js";import"./small-cross-GhLdprnj.js";import"./ActionButton-BHr0ILkQ.js";import"./Checkbox-CDsSsvHY.js";import"./useValueChanged-QHxo1YSZ.js";import"./CollapsiblePanel-jbwQyiaf.js";import"./MultiColumnSortDialog-Ddpi_1qm.js";import"./MenuTrigger-L3qhVa3P.js";import"./CompositeItem-6_9MUd5U.js";import"./ToolbarRootContext-CvBB5dRJ.js";import"./getDisabledMountTransitionStyles-C8_atirw.js";import"./getPseudoElementBounds-cb4sJS9G.js";import"./chevron-down-UzOgz9cR.js";import"./index-CBQZe3n0.js";import"./error-U6-2l1WQ.js";import"./BaseCbacBanner-BfHXlN_7.js";import"./makeExternalStore-C7CnX90v.js";import"./Tooltip-D5MpYEr-.js";import"./PopoverPopup-DfHmD2Xb.js";import"./debounce-C7dCSXck.js";import"./useOsdkClient-CxRWx5of.js";import"./tick-B8UVtEGY.js";import"./DropdownField-C-BLWb4q.js";import"./isEqual-CIsuS3iH.js";import"./withOsdkMetrics-BHO_8kDg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
