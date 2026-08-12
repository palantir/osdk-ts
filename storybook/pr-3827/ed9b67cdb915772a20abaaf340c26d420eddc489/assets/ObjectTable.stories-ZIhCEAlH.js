import{j as i}from"./iframe-CFVb3Ps1.js";import{O as p}from"./object-table-JJpjSfXj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BuSs3Fy6.js";import"./preload-helper-DUoBkcgp.js";import"./Table-C2qgkEda.js";import"./index-j_9_-Knb.js";import"./Dialog-u29b7JHZ.js";import"./cross-F64g4juI.js";import"./svgIconContainer-BIq4W7rh.js";import"./useBaseUiId-CYUQh1eE.js";import"./InternalBackdrop-C3_T0t_S.js";import"./composite-jNoK6z7Q.js";import"./index-PnPL-ngj.js";import"./index-BCwpvRKP.js";import"./index-MQFZGLtj.js";import"./useEventCallback-DfWEp3Qi.js";import"./SkeletonBar-DsIQ6u2E.js";import"./LoadingCell-Brtw5k8F.js";import"./ColumnConfigDialog-DCfB-Yy2.js";import"./DraggableList-BHy4YGXC.js";import"./search-dFaASQnw.js";import"./Input-DrcYzl24.js";import"./useControlled-DrQ2fT0v.js";import"./isEqual-DZJ5fEd6.js";import"./isObject-B_0v44vx.js";import"./Button-YOYPucvk.js";import"./ActionButton-DsjiNWUu.js";import"./Checkbox-CvxuqX69.js";import"./useValueChanged-u72R6kQz.js";import"./CollapsiblePanel-BVLs8nbx.js";import"./MultiColumnSortDialog-DkRJeCZc.js";import"./MenuTrigger-DYapyQQR.js";import"./CompositeItem-DCUGYySc.js";import"./ToolbarRootContext-AlgrHhlC.js";import"./getDisabledMountTransitionStyles-hPO0FBhu.js";import"./getPseudoElementBounds-DbAHztz7.js";import"./chevron-down-Bq_Zi3-5.js";import"./index-Chak816X.js";import"./error-BTpRUOI6.js";import"./BaseCbacBanner-Djq95ilw.js";import"./makeExternalStore-D5L1QyPs.js";import"./Tooltip-Cy4QqDmK.js";import"./PopoverPopup-Bkp1GJEw.js";import"./toNumber-BkArYVYP.js";import"./useOsdkClient-SiBep89O.js";import"./tick-BEPEfegi.js";import"./DropdownField-D_0so34u.js";import"./withOsdkMetrics-BZU3mB8s.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
